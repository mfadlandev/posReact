import Button from "../../components/Button";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
      <div className="grid grid-cols-3">
        <div className=" w-95 h-40 tracking-tight bg-white p-6 rounded-2xl shadow flex flex-col justify-between">
          <h1 className="tracking-tight font-semibold">Total Pendapatan</h1>
          <h3 className="font-bold ">+ Rp 100.000</h3>
        </div>
        <div className=" w-95 h-40 tracking-tight bg-white p-6 rounded-2xl shadow flex flex-col justify-between">
          <h1 className="tracking-tight font-semibold">Total Pengeluaran</h1>
          <h3 className="font-bold ">- Rp 30.000</h3>
        </div>
        <div className=" w-95 h-40 tracking-tight bg-white p-6 rounded-2xl shadow flex flex-col justify-between">
          <h1 className="tracking-tight font-semibold">Total Transaksi</h1>
          <h3 className="font-bold ">5</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6">
        <div className="h-120 bg-white mt-10 rounded-2xl p-6">
          <div className="border-b min-w-full pb-4">
            <h1 className="tracking-tight font-semibold borde">
              Produk Terlaris
            </h1>
          </div>
        </div>

        <div className=" h-120 bg-white mt-10 rounded-2xl p-6">
          <div className="border-b min-w-full pb-4">
            <h1 className="tracking-tight font-semibold borde">
              Daftar Krisis Stcok
            </h1>
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3">Nama Produk</th>
                  <th className="text-left py-3">Harga</th>
                  <th className="text-center py-3">Stok</th>
                  <th className="text-center py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="text-left py-3">Black Coffee</td>
                  <td className="text-left py-3">Rp12.000</td>
                  <td className="text-center py-3">1</td>
                  <td className="text-center py-3">
                    <Button></Button>
                    <Button variant="delete"></Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-left py-3">Coffee Latte</td>
                  <td className="text-left py-3">Rp15.000</td>
                  <td className="text-center py-3">2</td>
                  <td className="text-center py-3">
                    <Button></Button>
                    <Button variant="delete"></Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
