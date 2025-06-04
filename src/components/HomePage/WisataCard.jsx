import { useEffect, useState } from "react";

const WisataCard = () => {
  const [dataWisata, setDataWisata] = useState([]);
  const [indexAwal, setIndexAwal] = useState(0);
  const maxDisplay = 3;
  const cardWidth = 330;
  const gap = 48;

  const fetchDatas = async () => {
    try {
      const response = await fetch("/public/data-puntang.json");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setDataWisata(data);
    } catch (error) {
      console.log("Error mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const nextSlide = () => {
    if (indexAwal + maxDisplay < dataWisata.length) {
      setIndexAwal(indexAwal + 1);
    }
  };

  const prevSlide = () => {
    if (indexAwal > 0) {
      setIndexAwal(indexAwal - 1);
    }
  };

  const containerWidth = cardWidth * maxDisplay + gap * (maxDisplay - 1);

  // const handleDetail = (id) => {
  //   alert(`Klik detail untuk ID: ${id}`);
  // };

  return (
    <div id="wisata" className="my-14 px-14">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
        Wisata Populer
      </h1>

      <div
        className="mx-auto overflow-hidden"
        style={{ width: `${containerWidth}px` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-12"
          style={{
            transform: `translateX(-${indexAwal * (cardWidth + gap)}px)`,
          }}
        >
          {dataWisata.map((wisata) => (
            <div
              key={wisata.id}
              className="relative w-[330px] flex-shrink-0 pb-14"
            >
              <div className="rounded-xl overflow-hidden shadow-lg w-full h-96">
                <img
                  src={wisata.gambarList[2]}
                  alt={wisata.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-white px-4 py-4 w-[280px] rounded-xl shadow-md text-center z-10">
                <h3 className="text-md font-medium mb-2">{wisata.nama}</h3>
                <button
                  className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600"
                >
                  selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prevSlide}
          disabled={indexAwal === 0}
          className="text-2xl bg-white border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-white disabled:opacity-30"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          disabled={indexAwal + maxDisplay >= dataWisata.length}
          className="text-2xl bg-white border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white hover:border-white disabled:opacity-30"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default WisataCard;
