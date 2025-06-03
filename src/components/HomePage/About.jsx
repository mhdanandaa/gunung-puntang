import imgAbout from "../../assets/IMGAbout.svg";
const About = () => {
  return (
    <div className="my-14 px-14">
      <h1 className="text-3xl font-bold text-emerald-800">Tentang Kami</h1>
      <div className="grid grid-cols-2 gap-4 px-8 pt-2">
        <div className="col-span-1">
          <h1 className="text-2xl font-regular text-gray-300">
            Since 1998
          </h1>
          <p className="text-lg text-justify">
            Gunung Puntang adalah destinasi wisata alam yang terletak di Bandung
            Selatan, tepatnya di Desa Campaka Mulya, Kecamatan Cimaung,
            Kabupaten Bandung. Dengan ketinggian 1.290 mdpl, Gunung Puntang
            menawarkan suasana sejuk, udara dingin, dan pemandangan alam yang
            menawan. Selain keindahan alam, Gunung Puntang juga kaya akan nilai
            sejarah dan edukasi.
          </p>
        </div>
        <img src={imgAbout} alt="Gambar Puntang" />
      </div>
    </div>
  );
};

export default About;
