import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

const Navbar = () => {
    const getTitle = () => {
        const path = location.pathname;
        if (path.startsWith('/aboutA')) return 'Tentang Kami';
        if (path.startsWith('/destinationA')) return 'Destinasi';

        return 'Halaman Admin';
    }
    return(
        <nav className='bg-white fixed w-[65rem] pl-9 pr-12 py-3 flex justify-between ml-60 border-black border-b z-50'>
            <div className='flex items-center text-xl'>
                <span className=' text-lg font-medium'>{getTitle()}</span>
            </div>
            <a href="" className="flex items-center text-[#CB0404] text-lg font-medium">
                <MdOutlineArrowBack size={25} className="mr-2"/>
                Kembali
            </a>
        </nav>
    )
}

export default Navbar;