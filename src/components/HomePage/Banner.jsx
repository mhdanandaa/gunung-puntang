import BannerBg from "../../assets/Banner.png";
import nextArrow from "../../assets/nextArrow.svg";

const Banner = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center px-14"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="mr-auto">
        <h1 className="text-white text-4xl font-medium tracking-wider">
          Jelajahi <br /> Gunung Puntang
        </h1>
      </div>
      <div className="flex justify-center items-center bg-amber-600 rounded-lg mt-4 mr-auto">
        <h1 className="py-2 text-lg pl-4 text-white">Jelajahi Sekarang</h1>
        <div className="px-4">
          <img src={nextArrow} alt="Instagram" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
