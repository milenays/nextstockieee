import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('nextstockie');

  if (req.method === 'GET') {
    const brands = await db.collection('brands').find({}).toArray();
    res.status(200).json(brands);
  } else if (req.method === 'POST') {
    const newBrand = req.body;
    const result = await db.collection('brands').insertOne(newBrand);
    res.status(201).json(result.ops[0]);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
