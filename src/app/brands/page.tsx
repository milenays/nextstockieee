"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BrandManagement() {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const response = await axios.get('/api/brands');
    setBrands(response.data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/brands', { name });
    setName('');
    fetchBrands();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Brand Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Brand Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Brand</button>
      </form>
      <ul>
        {brands.map((brand) => (
          <li key={brand._id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
}
