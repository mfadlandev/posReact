import Button from "../../components/Button";

export default function ProdukPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Produk</h1>
      <div className="bg-white w-full h-auto rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-5 border-b pb-5">Daftar Produk</h1>
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="text-left pb-2 w-full">Nama Produk</th>
              <th className="text-left pb-2 w-full">Harga</th>
              <th className="text-left pb-2 w-full">Stok</th>
              <th className="text-left pb-2 w-full">Deskripsi</th>
              <th className="text-center pb-2 w-full">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Black Coffee</td>
              <td>Rp 12.000</td>
              <td>1</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
              <td className="text-center py-3">
                <Button></Button>
                <Button variant="delete"></Button>
              </td>
            </tr>
            <tr>
              <td>Coffee Latte</td>
              <td>Rp 15.000</td>
              <td>2</td>
              <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
              <td className="text-center py-3">
                <Button></Button>
                <Button variant="delete"></Button>
              </td>
            </tr>
            <tr>
              <td>Bread</td>
              <td>Rp 8.000</td>
              <td>20</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
              <td className="text-center py-3">
                <Button></Button>
                <Button variant="delete"></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
