import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailContent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [gambarUtama, setGambarUtama] = useState("");

  const fetchData = async () => {
    console.log("id dari useParams:", id);

    try {
      const response = await fetch("/data-puntang.json");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const datas = await response.json();

      const detailItem = datas.find((item) => item.id.toString() === id);
      if (!detailItem) throw new Error(`Data dengan ID ${id} tidak ditemukan`);

      setData(detailItem);
      setGambarUtama(detailItem.gambarList[0]);
    } catch (error) {
      console.error("Error mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div id="detail" className="max-w-5xl mx-auto px-14 py-24 ">
      <h2 className="text-2xl font-bold mb-4">{data.nama}</h2>
      <p className="text-sm text-gray-600 mb-6">📍{data.lokasi}</p>

      <div className="flex flex-col items-center gap-4">
        <img
          src={gambarUtama}
          alt="Gambar Utama"
          className="w-full max-w-3xl h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
        />
        <div className="flex flex-wrap gap-4 justify-center w-full max-w-3xl">
          {data.gambarList.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => setGambarUtama(src)}
              alt={`thumb-${index}`}
              className={`w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-xl cursor-pointer border-2 ${
                gambarUtama === src
                  ? "border-orange-500 border-4"
                  : "border-transparent hover:border-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-14">
        <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
        <p className="text-gray-800 text-sm leading-relaxed text-justify">
          {data.deskripsi}
        </p>

        <h3 className="text-lg font-semibold mt-10 mb-2">Informasi tambahan</h3>
        <div className="flex flex-col gap-4 text-sm text-gray-700">
          <p>{data.jam_operasional}</p>
          <p>{data.harga}</p>
        </div>

        <h3 className="text-lg font-semibold mt-10 mb-2">Sumber referensi</h3>
        <ul className="list-disc list-inside text-blue-600 text-sm space-y-1">
          {data.referensi.map((link, i) => (
            <li key={i}>
              <a href={link} target="_blank" rel="noreferrer">
                {new URL(link).hostname}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailContent;
