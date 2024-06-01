import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('nextstockie');
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updatedProduct = req.body;
    try {
      const result = await db.collection('products').updateOne(
        { _id: new ObjectId(id as string) },
        { $set: updatedProduct }
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const result = await db.collection('products').deleteOne({ _id: new ObjectId(id as string) });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
