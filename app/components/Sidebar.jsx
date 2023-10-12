"use client"
import Image from 'next/image'
import logo from '../../public/BidStruct_Logo.png'
import SidebarList from './SidebarList'
import { navTitles } from '../Utils/SidebarList'
import { BiSearchAlt2, IoLogOut } from '../Utils/icons'
import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
// import { redirect } from 'next/navigation'


export default function Sidebar() {
    const { dispatch } = useAuthContext()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        // redirect('/')
    }
    return (
        <nav className='h-screen p-8 flex flex-col justify-between border-r-2 border-opacity-20 border-mute sticky top-0'>
            <div className='flex flex-col gap-10'>
                <div>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286}
                    />
                </div>
                <div className='relative'>
                    <input type="text" className='border border-mute border-opacity-20 px-10 py-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary focus:placeholder:text-primary peer' placeholder='Search' />
                    <BiSearchAlt2 className='text-mute text-2xl absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 peer-focus:text-primary' />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-mute text-sm '>Menu</p>
                    <ul className='flex flex-col gap-5'>
                        {
                            navTitles.map((list) => (
                                <React.Fragment key={list.id}>
                                    <SidebarList list={list} />
                                </React.Fragment>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex w-full'>
                <button onClick={handleLogout} className='flex w-full items-center gap-2 bg-primary text-white p-3 rounded-lg hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                    <IoLogOut className='text-2xl' />
                    <span className='text-base'>
                        Logout
                    </span>
                </button>
            </div>
        </nav>
    )
}
