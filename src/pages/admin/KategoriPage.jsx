import Button from "../../components/Button";

export default function KategoriPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Kategori</h1>
      <div className="bg-white w-full h-auto rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-5 border-b pb-5">
          Daftar Kategori
        </h1>
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="text-left pb-2 w-[40%]">Nama Kategori</th>
              <th className="text-left pb-2 w-[40%]">Deskripsi</th>
              <th className="text-center pb-2 w-[20%]">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cofee</td>
              <td>Jenis-Jenis Coffee</td>
              <td className="text-center py-3">
                <Button></Button>
                <Button variant="delete"></Button>
              </td>
            </tr>
            <tr>
              <td>Bread</td>
              <td>Jenis-Jenis Roti</td>
              <td className="text-center py-3">
                <Button></Button>
                <Button variant="delete"></Button>
              </td>
            </tr>
            <tr>
              <td>Testing</td>
              <td className=" wrap-break-word max-w-40">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates soluta facilis at voluptatem aperiam distinctio
              </td>
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
