"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {

  const[ isOpen, setIsOpen ] = useState(false);

  const cartItems = useCartStore((state) => state.items);

  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = (
    <>
      <Link href="/" className="p-2">Home</Link>
      <Link href="/products" className="p-2">Products</Link>
      <Link href="/cart" className="p-2 relative">
      Cart
      {totalCount > 0 && (
          <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {totalCount}
          </span>
        )}
      </Link>
      <button className="px-4 py-2 bg-white text-[#C9A9B3] rounded-md">
        Login
      </button>
    </>
  )
  return (
    <nav className="bg-[#C9A9B3] text-white shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Pearl Shop</h1>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-3 items-center">
          {menuItems}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-2 md:hidden gap-2">
          {menuItems}
        </div>
      )}
    </nav>
  );
  
}