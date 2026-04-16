"use client";

import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  id: number;
title: string;
price: number;
image: string;
}

export default function ProductCard({id,title,price,image}:ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center gap-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button className="px-4 py-2 bg-[#C9A9B3] text-white rounded-md" 
      onClick={() => addToCart({id, title, price})}>
        Add to Cart
      </button>
    </div>
  );
}