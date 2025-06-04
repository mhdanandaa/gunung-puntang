import React from "react";
import { MdOutlineArrowBack, MdLogout  } from "react-icons/md";

const Navbar = () => {
    const getTitle = () => {
        const path = location.pathname;
        if (path.startsWith('/aboutA')) return 'Tentang Kami';
        if (path.startsWith('/destinationA')) return 'Destinasi';

        return 'Halaman Admin';
    }
    const isDashboard = location.pathname === '/dashboardA'
    
    return(
        <nav 
            className={`bg-white fixed pl-9 pr-12 py-3 flex justify-between border-black border-b z-50 ${
                isDashboard ? "ml-0 w-full" : "ml-60 w-[65rem]"
            }`}>
            <div className='flex items-center text-xl'>
                <span className=' text-lg font-medium'>{getTitle()}</span>
            </div>

            {!isDashboard && (
                <a href="" className="flex items-center text-[#CB0404] text-lg font-medium">
                    <MdOutlineArrowBack size={25} className="mr-2"/>
                    Kembali
                </a>
            )}
            
            {isDashboard && (
                <a href="" className="flex items-center text-[#FF0000] text-base font-normal">
                    <MdLogout size={20} className="mr-2"/>
                    Logout
                </a>
            )}

        </nav>
        
    )
}

export default Navbar;