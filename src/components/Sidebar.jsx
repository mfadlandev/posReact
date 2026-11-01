import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen }) {
  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:flex md:flex-col w-64 min-h-screen bg-white shadow-md`}
    >
      <div className="p-4 font-bold text-xl">My Admin</div>

      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/admin" className="hover:bg-gray-200 p-2 rounded">
          Dashboard
        </Link>

        <Link to="/Admin/Kategori" className="hover:bg-gray-200 p-2 rounded">
          Kategori
        </Link>

        <Link to="/Admin/Produk" className="hover:bg-gray-200 p-2 rounded">
          Produk
        </Link>
        
        <Link to="/Admin/Transaksi" className="hover:bg-gray-200 p-2 rounded">
          Transaksi
        </Link>
      </nav>

      <Link to="/" className="mt-auto m-4 p-2 rounded-xl hover:bg-gray-600 bg-black text-white text-center font-bold">
        Back Home
      </Link>
    </div>
  );
}
