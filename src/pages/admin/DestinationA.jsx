import React from "react";
import Navbar from "./Navbar";
import SidebarA from "./SidebarA";
import Dummy2 from "../../../public/gambar/Dummy2.png"

const DestinationA = () => {
    return(
        <div>
            <Navbar/>
            <SidebarA/>
            <div className="pt-16 pb-8 pl-[17rem] pr-7">
                <p className="text-lg font-medium">Konten Destinasi :</p>
                <button className="bg-[#7BAD86] text-white mt-5 px-4 py-1 rounded-md"><a href="/formDestination">Tambah Data</a></button>

                <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="px-4 py-5 rounded-lg border border-[#667554]">
                        <div className="flex gap-2">
                            <div className="space-y-1">
                                <h1 className="font-medium">Cafe Berg Gunung Puntang</h1>
                                <h3 className="text-[#756B6B] text-xs">Mekarjaya, Kec. Banjaran, Kabupaten Bandung, Jawa Barat</h3>
                                <p className="text-sm font-light line-clamp-4">Destinasi wisata alam terbaik untuk menjelajahi jejak kolonialisme di antara kemegahan alam dengan hawa dan udara terasa sangat sejuk</p>
                            </div>
                            <img 
                            src={Dummy2} 
                            alt="" 
                            className="w-[168px] h-[134px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-5 flex gap-5 justify-center">
                            <button className="border border-[#E50914] hover:bg-[#E50914] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#E50914]">Hapus</button>
                            <button className="border border-[#198F1E] hover:bg-[#198F1E] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#198F1E]">Edit</button>
                        </div>
                    </div>

                    <div className="px-4 py-5 rounded-lg border border-[#667554]">
                        <div className="flex gap-2">
                            <div className="space-y-1">
                                <h1 className="font-medium">Cafe Berg Gunung Puntang</h1>
                                <h3 className="text-[#756B6B] text-xs">Mekarjaya, Kec. Banjaran, Kabupaten Bandung, Jawa Barat</h3>
                                <p className="text-sm font-light line-clamp-4">Destinasi wisata alam terbaik untuk menjelajahi jejak kolonialisme di antara kemegahan alam dengan hawa dan udara terasa sangat sejuk</p>
                            </div>
                            <img 
                            src={Dummy2} 
                            alt="" 
                            className="w-[168px] h-[134px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-5 flex gap-5 justify-center">
                            <button className="border border-[#E50914] hover:bg-[#E50914] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#E50914]">Hapus</button>
                            <button className="border border-[#198F1E] hover:bg-[#198F1E] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#198F1E]">Edit</button>
                        </div>
                    </div>

                    <div className="px-4 py-5 rounded-lg border border-[#667554]">
                        <div className="flex gap-2">
                            <div className="space-y-1">
                                <h1 className="font-medium">Cafe Berg Gunung Puntang</h1>
                                <h3 className="text-[#756B6B] text-xs">Mekarjaya, Kec. Banjaran, Kabupaten Bandung, Jawa Barat</h3>
                                <p className="text-sm font-light line-clamp-4">Destinasi wisata alam terbaik untuk menjelajahi jejak kolonialisme di antara kemegahan alam dengan hawa dan udara terasa sangat sejuk</p>
                            </div>
                            <img 
                            src={Dummy2} 
                            alt="" 
                            className="w-[168px] h-[134px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-5 flex gap-5 justify-center">
                            <button className="border border-[#E50914] hover:bg-[#E50914] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#E50914]">Hapus</button>
                            <button className="border border-[#198F1E] hover:bg-[#198F1E] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#198F1E]">Edit</button>
                        </div>
                    </div>

                    <div className="px-4 py-5 rounded-lg border border-[#667554]">
                        <div className="flex gap-2">
                            <div className="space-y-1">
                                <h1 className="font-medium">Cafe Berg Gunung Puntang</h1>
                                <h3 className="text-[#756B6B] text-xs">Mekarjaya, Kec. Banjaran, Kabupaten Bandung, Jawa Barat</h3>
                                <p className="text-sm font-light line-clamp-4">Destinasi wisata alam terbaik untuk menjelajahi jejak kolonialisme di antara kemegahan alam dengan hawa dan udara terasa sangat sejuk</p>
                            </div>
                            <img 
                            src={Dummy2} 
                            alt="" 
                            className="w-[168px] h-[134px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-5 flex gap-5 justify-center">
                            <button className="border border-[#E50914] hover:bg-[#E50914] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#E50914]">Hapus</button>
                            <button className="border border-[#198F1E] hover:bg-[#198F1E] hover:text-white w-20 py-2 rounded-full text-xs font-medium text-[#198F1E]">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationA;