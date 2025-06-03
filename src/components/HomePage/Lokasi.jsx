import React from "react";

const Lokasi = () => {
  return (
    <div className="flex flex-col justify-center items-center my-14 px-14">
      <h1 className="text-4xl font-bold text-emerald-800">Lokasi Kami</h1>
      <div className="pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31672.31823445315!2d107.60051145615982!3d-7.121388344459668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6894e286c59425%3A0x9dbd61bc655e0777!2sGunung%20Puntang!5e0!3m2!1sid!2sid!4v1748921147667!5m2!1sid!2sid"
          width="1000"
          height="550"
        ></iframe>
      </div>
    </div>
  );
};

export default Lokasi;
