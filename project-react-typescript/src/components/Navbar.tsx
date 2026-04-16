export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-10 py-4 flex justify-between items-center relative z-50">
      {/* LOGO */}
      <div className="font-bold text-lg">TRADEASIA</div>

      {/* MENU */}
      <div className="hidden md:flex gap-8 font-medium">
        {/* DROPDOWN COMPANY */}
        <div className="relative group py-2">
          <button className="hover:text-blue-200 transition flex items-center gap-1">
            Company ▼
          </button>

          {/* DROPDOWN */}
          <div className="absolute left-0 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              About Us
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Our Values
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Sustainability
            </a>
          </div>
        </div>

        {/* MENU LAIN */}
        <a href="#" className="hover:text-blue-200 transition">
          Products
        </a>
        <a href="#" className="hover:text-blue-200 transition">
          Market Insights
        </a>
        <a href="#" className="hover:text-blue-200 transition">
          Career
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <span>🔍</span>
        <span>🌐</span>

        <button className="border px-4 py-1 rounded-full hover:bg-white hover:text-blue-700 transition">
          Sign In
        </button>

        <button className="bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
