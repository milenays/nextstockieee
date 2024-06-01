"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    stockCode: '',
    barcode: '',
    category: '',
    brand: '',
    description: '',
    weight: '',
    quantity: '',
    price: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`/api/products/${editProductId}`, formData);
        setEditMode(false);
        setEditProductId('');
      } else {
        await axios.post('/api/products', formData);
      }
      setFormData({
        name: '',
        stockCode: '',
        barcode: '',
        category: '',
        brand: '',
        description: '',
        weight: '',
        quantity: '',
        price: '',
      });
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product: any) => {
    setFormData({
      name: product.name,
      stockCode: product.stockCode,
      barcode: product.barcode,
      category: product.category,
      brand: product.brand,
      description: product.description,
      weight: product.weight,
      quantity: product.quantity,
      price: product.price,
    });
    setEditMode(true);
    setEditProductId(product._id);
  };

  const handleDelete = async (productId: string) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Product Management</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Product Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="stockCode" className="sr-only">Stock Code</label>
              <input
                id="stockCode"
                name="stockCode"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Stock Code"
                value={formData.stockCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="barcode" className="sr-only">Barcode</label>
              <input
                id="barcode"
                name="barcode"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Barcode"
                value={formData.barcode}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category" className="sr-only">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="brand" className="sr-only">Brand</label>
              <input
                id="brand"
                name="brand"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">Description</label>
              <input
                id="description"
                name="description"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="weight" className="sr-only">Weight</label>
              <input
                id="weight"
                name="weight"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="quantity" className="sr-only">Quantity</label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="price" className="sr-only">Price</label>
              <input
                id="price"
                name="price"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {editMode ? 'Update Product' : 'Create Product'}
            </button>
          </div>
        </form>
        <div className="mt-8 space-y-6">
          <h3 className="text-center text-2xl font-extrabold text-gray-900">Existing Products</h3>
          <ul className="space-y-4">
            {products.map((product: any) => (
              <li key={product._id} className="p-4 border border-gray-300 rounded-md">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Stock Code:</strong> {product.stockCode}</p>
                <p><strong>Barcode:</strong> {product.barcode}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Weight:</strong> {product.weight}</p>
                <p><strong>Quantity:</strong> {product.quantity}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}