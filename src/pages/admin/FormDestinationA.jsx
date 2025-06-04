import React from "react";
import Navbar from "./Navbar";
import SidebarA from "./SidebarA";
import { FaPlus } from "react-icons/fa6";

const FormDestinationA = () => {
    return(
        <div>
            <Navbar/>
            <SidebarA></SidebarA>
            <div className="pt-16 pb-8 pl-[17rem] pr-8">
                <p className="text-lg font-medium">Pilih Konten Berikut Untuk Menambah Data  :</p>
                <div className="grid grid-cols-2 justify-between mt-5">
                    {/* INPUTAN TEXT */}
                    <div>
                        <div>
                            <h1 className="font-medium text-sm">Keterangan Lokasi</h1>
                            <input 
                                type="text"
                                className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                            />
                        </div>
                        <div className="mt-5">
                            <h1 className="font-medium text-sm">Alamat Lokasi</h1>
                            <input 
                                type="text"
                                className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                            />
                        </div>
                        <div className="mt-5">
                            <h1 className="text-sm font-medium">Deskripsi</h1>
                            <textarea
                                className='mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-28 border border-[#667554] focus:outline-[#2684FF]'
                            />
                        </div>

                        {/* INFORMASI TAMBAHAN */}
                        <div className="mt-5">
                            <h1 className="text-sm font-medium">Informasi Tambahan</h1>
                            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                                <input 
                                    type="text" 
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="*Opsional"
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="*Opsional"
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="*Opsional"
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                            </div>
                        </div>

                        {/* SUMBER REFERENSI */}
                        <div className="mt-5">
                            <h1 className="text-sm font-medium">Sumber Referensi</h1>
                            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                                <input 
                                    type="text" 
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="*Opsional"
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="*Opsional"
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="*Opsional"
                                    className="mt-1 text-sm font-light text-[#6E6E6E] bg-[#FCFFF8] py-1 px-3 rounded-lg w-full h-8 border border-[#667554] focus:outline-[#2684FF]"
                                />
                            </div>
                        </div>

                        <button className="mt-8 w-full h-8 rounded-xl bg-[#D9D9D9] hover:bg-[#c4c4c4] text-sm font-medium">Posting Konten</button>
                    </div>

                    {/* INPUTAN IMAGE */}
                    <div className="pl-36 pr-24">
                        <h1 className="text-sm font-medium">Foto Lokasi</h1>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <button className="bg-[#D9D9D9] py-1 px-3 rounded-lg w-28 h-28 focus:outline-[#2684FF] flex items-center justify-center cursor-default">
                                <FaPlus size={40} className="text-black cursor-pointer" />
                            </button>
                            <button className="bg-[#D9D9D9] py-1 px-3 rounded-lg w-28 h-28 focus:outline-[#2684FF] flex items-center justify-center cursor-default">
                                <FaPlus size={40} className="text-black cursor-pointer" />
                            </button>
                            <button className="bg-[#D9D9D9] py-1 px-3 rounded-lg w-28 h-28 focus:outline-[#2684FF] flex items-center justify-center cursor-default">
                                <FaPlus size={40} className="text-black cursor-pointer" />
                            </button>
                            <button className="bg-[#D9D9D9] py-1 px-3 rounded-lg w-28 h-28 focus:outline-[#2684FF] flex items-center justify-center cursor-default">
                                <FaPlus size={40} className="text-black cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDestinationA;