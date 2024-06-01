import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ message: 'Missing role' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    await db.collection('users').updateOne({ _id: new ObjectId(id as string) }, { $set: { role } });

    res.status(200).json({ message: 'User role updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
