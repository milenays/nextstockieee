import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection('users').findOne({ email: credentials?.email });

        if (user && credentials?.password) {
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (isValid) {
            return { id: user._id, name: user.firstName, email: user.email };
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
});
