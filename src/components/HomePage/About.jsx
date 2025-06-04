import imgAbout from "../../assets/IMGAbout.svg";
const About = () => {
  return (
    <div className="my-14 px-20">
      <h1 className="text-5xl font-bold text-emerald-800">Tentang Kami</h1>
      <div className="grid grid-cols-2 gap-4 ">
        <div className= "col-span-1">
          <h1 className="text-2xl font-regular text-gray-300 pt-3">
            Sejak 1998
          </h1>
          <div className="px-8 pt-4">
            <p className="text-lg text-justify pr-14 pt-4 leading-relaxed">
              Gunung Puntang adalah destinasi wisata alam yang terletak di
              Bandung Selatan, tepatnya di Desa Campaka Mulya, Kecamatan
              Cimaung, Kabupaten Bandung. Dengan ketinggian 1.290 mdpl, Gunung
              Puntang menawarkan suasana sejuk, udara dingin, dan pemandangan
              alam yang menawan. Selain keindahan alam, Gunung Puntang juga kaya
              akan nilai sejarah dan edukasi.
            </p>
            <div className="flex justify-center items-center bg-emerald-800 rounded-lg mt-4 w-1/3">
              <h1 className="py-2 text-lg text-white">Selengkapnya</h1>
            </div>
          </div>
        </div>
        <img src={imgAbout} alt="Gambar Puntang" />
      </div>
    </div>
  );
};

export default About;
