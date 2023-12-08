"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import useAuth from '../hooks/useAuth'
import { navTitles } from '../Utils/SidebarList'
import logo from '../../public/BidStruct_Logo.png'
import { BiSearchAlt2, IoLogOut } from '../Utils/icons'


const SidebarList = dynamic(() => import('./SidebarList'))

export default function Sidebar() {
    const { logout, loading } = useAuth()
    return (
        <nav className='h-screen p-8 flex flex-col justify-between border-r-2 border-opacity-20 border-mute sticky top-0 col-span-2'>
            <div className='flex flex-col gap-10'>
                <div>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286}
                    />
                </div>
                {/* <div className='relative'>
                    <input type="text" className='border border-mute border-opacity-20 px-10 py-3 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary focus:placeholder:text-primary peer' placeholder='Search' />
                    <BiSearchAlt2 className='text-mute text-2xl absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 peer-focus:text-primary' />
                </div> */}
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
                {
                    loading && <button
                        className='flex w-full items-center gap-2 bg-primary/80 text-white p-3 rounded-lg hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'
                    >
                        <span className='text-base'>
                            Loading
                        </span>
                    </button>
                }
                {
                    !loading && <button onClick={() => logout()} className='flex w-full items-center gap-2 bg-primary text-white p-3 rounded-lg hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                        <IoLogOut className='text-2xl' />
                        <span className='text-base'>
                            Logout
                        </span>
                    </button>
                }
            </div>
        </nav>
    )
}
