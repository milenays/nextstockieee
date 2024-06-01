import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const client = await clientPromise;
  const db = client.db();

  const userExists = await db.collection('users').findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
  };

  await db.collection('users').insertOne(newUser);

  res.status(201).json({ message: 'User registered successfully' });
}
