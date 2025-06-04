import React from "react";
import Logo from "../../assets/Logo.svg";
import { MdLocationOn } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            {/* Bagian Logo dan Judul */}
            <div className="mb-8 flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo Gunung Puntang" className="w-20" />
                <p className="font-bold text-lg">Manajemen Konten <br /> Website Gunung Puntang</p>
                <p className="mt-1">Pilih Konten Untuk Mengedit :</p>
            </div>

            {/* Bagian Ikon */}
            <div className="flex justify-center gap-40">
                <div className="flex flex-col justify-center items-center text-center border-2 border-[#438014] rounded-lg w-32 h-36 cursor-pointer">
                    <a href="" className="flex flex-col justify-center items-center text-center">
                        <MdLocationOn size={90} color="#667554"/>
                        <p className="mt-1 mb-3 font-semibold text-sm">Tentang Kami</p>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center text-center border-2 border-[#438014] rounded-lg w-32 h-36 cursor-pointer">
                    <a href="">
                        <IoHomeSharp size={80} color="#667554"/>
                        <p className="my-3 font-semibold text-sm">Destinasi</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
