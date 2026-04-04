"use client";

import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    title: "Pearl Necklace",
    price: 99.99,
    image: "https://example.com/pearl-necklace.jpg",
  },
  {
    id: 2,
    title: "Pearl Earrings",
    price: 49.99,
    image: "https://example.com/pearl-earrings.jpg",
  },
  {
    id: 3,
    title: "Pearl Bracelet",
    price: 79.99,
    image: "https://example.com/pearl-bracelet.jpg",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-6 ">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image} 
          />
        ))}
      </div>
    </div>
  );
}