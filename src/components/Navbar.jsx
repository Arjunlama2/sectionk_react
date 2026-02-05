import React, { useState } from 'react'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";


const navigations = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Product",
        path: "/product"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "wishlist",
        path: "/order"
    },
]
function Navbar() {
    // const [data, setData] = useState()

    return (
        <>
        <div className='hidden px-20 md:flex justify-between items-center'>
            <div className='flex items-center gap-8'>
                <h1 className='text-[#0D0E43] font-semibold text-[24px]'  >Hekto</h1>
                <nav className='flex gap-2'>
                    {
                        navigations.map((el) => {
                            return <Link to={el.path} key={el.path}>{el.title}</Link>
                        })
                    }
                </nav>
            </div>

            <div className='flex items-center gap-5'>
                <input type="text" className='border-1 border-black' />
                <div className='bg-[#FB2E86] p-2'>
                    <CiSearch className='' />
                </div>


            </div>
        </div>

        <div className='fixed  md:hidden top-10 right-5'>
            <CiMenuBurger />
        </div>
        </>
    )
}

export default Navbar