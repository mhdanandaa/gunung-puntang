import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { LuTrees } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import Logo from "../../assets/Logo.svg";

const SidebarA = () => {
    const location = useLocation();
    const isActive = (path) => {
        const currentPath = window.location.pathname;
        return path.includes(currentPath);
    }

    return(
        <div className='w-60 bg-[#667554] fixed h-full'>
            <div className="mt-10 flex gap-3 items-center justify-center text-center">
                <img src={Logo} alt="Gunung Puntang" className="w-14" />
                <p className="text-white text-base font-medium">Gunung Puntang</p>
            </div>


            <ul className='mt-12 text-white text-sm'>

                <li className={`mb-5 hover:shadow hover:bg-[#7BAD86] hover:mx-4 hover:rounded-xl px-7 py-2 ${isActive(["/aboutA", "/formAbout"]) ? "bg-[#7BAD86] mx-4 rounded-xl" : ""}`}>
                    <a href="/aboutA" className="text-base">
                        <MdLocationOn className="inline-block w-7 h-7 mr-2" />
                        Tentang Kami
                    </a>
                </li>
                
                <li className={`mb-5  hover:shadow hover:bg-[#7BAD86] hover:mx-4 hover:rounded-xl px-7 py-2 ${isActive(["/destinationA", "/formDestination"]) ? "bg-[#7BAD86] mx-4 rounded-xl" : ""}`}>
                    <a href="/destinationA" className="text-base flex items-center">
                        <IoHomeSharp className="inline-block w-6 h-6 mr-3" />
                        Destinasi
                    </a>
                </li>
                
            </ul>

            {/* <MdLogout className='text-white w-6 h-6 mx-auto'/> */}
        </div>
    )
}

export default SidebarA;