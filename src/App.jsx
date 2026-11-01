import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import KasirPages from "./pages/kasir/KasirPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AboutPage from "./pages/admin/AboutPage";
import KategoriPage from "./pages/admin/KategoriPage";
import ProdukPage from "./pages/admin/ProdukPage";
import TransaksiPage from "./pages/admin/TransaksiPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<KasirPages />}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="Kategori" element={<KategoriPage />} />
          <Route path="Produk" element={<ProdukPage />} />
          <Route path="Transaksi" element={<TransaksiPage />} />
        </Route>
      </Routes>
    </>
  );
}
