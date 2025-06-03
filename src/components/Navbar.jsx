import { useState, useEffect } from "react";
import hamMenu from "../assets/hamMenu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const wisataSection = document.getElementById("wisata");
      if (wisataSection) {
        const top = wisataSection.getBoundingClientRect().top;
        if (top <= 60) {
          setBgColor("bg-emerald-800");
        } else {
          setBgColor("bg-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${bgColor} text-white fixed w-full px-14 z-50 transition-colors duration-300`}>
      <div className="mx-auto sm:px- lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row w-full justify-between">
            <div className="text-xl">Puntang</div>
            <div className="hidden md:block">
              <nav className="flex ml-10 gap-8">
                <a href="#">Beranda</a>
                <a href="#wisata">Destinasi</a>
                <a href="#">Peta Digital</a>
                <a href="#">Kontak Kami</a>
              </nav>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              <img src={hamMenu} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
          <a href="#">Beranda</a>
          <a href="#wisata">Destinasi</a>
          <a href="#">Peta Digital</a>
          <a href="#">Kontak Kami</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
