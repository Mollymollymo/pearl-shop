export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#C9A9B3] text-white shadow-sm">
      <h1 className="text-xl font-semibold">Pearl Shop</h1>

      <div className="flex gap-3">
        <div className="p-2">Home</div>
        <div className="p-2">Products</div>
        <button className="px-4 py-2 bg-white text-[#C9A9B3] rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
}