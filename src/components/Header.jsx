import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Navbar from './Navbar';

function Header() {
    return (
        <>
            <div className='bg-[#7E33E0] text-white px-20 py-2 flex justify-between'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-2'>
                        <MdEmail className='text-[20px]' />
                        <p className='font-semibold'>test@famial.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhoneAlt className='' />
                        <p className='font-semibold'>9841451454</p>

                    </div>

                </div>

                <div className='hidden md:flex gap-3 '>
                    <div className='flex items-center'>
                        <p>English</p>
                        <FaAngleDown />
                    </div>
                    <div className='flex items-center'>
                        <p>English</p>
                        <FaAngleDown />
                    </div>

                    <div className='flex items-center'>
                        <p>English</p>
                        <FaAngleDown />
                    </div>

                    <div className='flex items-center'>
                        <p>English</p>
                        <FaAngleDown />
                    </div>




                </div>
            </div>
            <Navbar/>



        </>
    )
}

export default Header