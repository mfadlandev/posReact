import { useState } from "react";

export default function TransaksiPage() {
  const [nama, setNama] = useState("Fadlan");
  const [count, setCount] = useState(0);
  if (count < 0 ){
    setCount(0);
    
  }
  return (
    <>
      <div>
        <h1>Nama Saya Adalah: {nama}</h1>
        <button onClick={() => setNama("Muhammad Fadlan")} className="cursor-pointer bg-slate-300 p-2 rounded-2xl">Nama Lengkap</button>
      </div>
      <div className="flex gap-x-5 pt-10">
        <button onClick={() => setCount(count + 1)} disabled={count >= 5 } className=" cursor-pointer bg-amber-300 p-2 rounded-2xl">Tambah</button>
        <p>{count >= 5 ? "Sudah Lima" : count}</p>
        <button onClick={() => setCount(count - 1)} disabled={count <= 0 } className="cursor-pointer bg-amber-300 p-2 rounded-2xl">Kurang</button>
      </div>
    </>
  );
}
