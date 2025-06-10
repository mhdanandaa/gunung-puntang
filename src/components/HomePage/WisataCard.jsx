import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const WisataCard = () => {
  const [dataWisata, setDataWisata] = useState([]);
  const [indexAwal, setIndexAwal] = useState(0);
  const [maxDisplay, setMaxDisplay] = useState(3);
  const [cardWidth, setCardWidth] = useState(330);
  const [gap, setGap] = useState(48);

  const fetchDatas = async () => {
    try {
      const response = await fetch("/public/data-puntang.json");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setDataWisata(data);
    } catch (error) {
      console.log("Error mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setMaxDisplay(1);
        setCardWidth(280);
        setGap(16);
      } else if (screenWidth < 1024) {
        setMaxDisplay(2);
        setCardWidth(300);
        setGap(24);
      } else {
        setMaxDisplay(3);
        setCardWidth(330);
        setGap(48);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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

  return (
    <div id="wisata" className="my-14 px-4 sm:px-8 md:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-8">
        Wisata Populer
      </h1>

      <div
        className="mx-auto overflow-hidden"
        style={{ width: `${containerWidth}px` }}
      >
        <Link to="/destination">
          <h3 className="font-semibold text-sky-800 text-sm sm:text-base text-end mb-4">
            Lihat lebih banyak
          </h3>
        </Link>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${indexAwal * (cardWidth + gap)}px)`,
          }}
        >
          {dataWisata.map((wisata) => (
            <div
              key={wisata.id}
              className="relative flex-shrink-0 pb-14"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg w-full h-72 sm:h-80 md:h-96">
                <img
                  src={wisata.gambarList[2]}
                  alt={wisata.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-white px-4 py-4 w-[80%] sm:w-[260px] rounded-xl shadow-md text-center z-10">
                <h3 className="text-md font-medium mb-2">{wisata.nama}</h3>
                <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600">
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
          className="group bg-white border border-black p-2 rounded-full hover:bg-black hover:border-white disabled:opacity-30"
        >
          <SlArrowLeft className="h-6 w-6 text-black group-hover:text-white transition" />
        </button>

        <button
          onClick={nextSlide}
          disabled={indexAwal + maxDisplay >= dataWisata.length}
          className="group bg-white border border-black p-2 rounded-full hover:bg-black hover:border-white disabled:opacity-30"
        >
          <SlArrowRight className="h-6 w-6 text-black group-hover:text-white transition" />
        </button>
      </div>
    </div>
  );
};

export default WisataCard;
