"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  _id: string;
  name: string;
  stockCode: string;
  barcode: string;
  category: string;
  brand: string;
  description: string;
  weight: string;
  quantity: number;
  price: number;
}

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Partial<Product>>({});

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = () => {
    axios.post("/api/products", product).then((response) => {
      setProducts([...products, response.data]);
      setProduct({});
    });
  };

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Input
              placeholder="Product Name"
              name="name"
              value={product.name || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Stock Code"
              name="stockCode"
              value={product.stockCode || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Barcode"
              name="barcode"
              value={product.barcode || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Category"
              name="category"
              value={product.category || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Brand"
              name="brand"
              value={product.brand || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Description"
              name="description"
              value={product.description || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Weight"
              name="weight"
              value={product.weight || ""}
              onChange={handleChange}
            />
            <Input
              placeholder="Quantity"
              name="quantity"
              type="number"
              value={product.quantity || 0}
              onChange={handleChange}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={product.price || 0}
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Create Product</Button>
        </CardFooter>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Existing Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Stock Code</TableHead>
                <TableHead>Barcode</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.stockCode}</TableCell>
                  <TableCell>{product.barcode}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.weight}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Button variant="outline">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
