"use client"
import { useState } from 'react'
import { CgMenuRight, CgCloseO } from '../../Utils/icons'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import logo from '../../../public/BidStruct_Logo.png'
import { motion as m } from 'framer-motion'


const show = {
    x: "0%",
    opacity: 1,
    display: "block"
};

const hide = {
    x: "-100%",
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};



export default function ResponsiveSidebar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div
                onClick={() => setShowMenu(!showMenu)}
                className='2xl:hidden xl:hidden lg:block sm:block block hover:bg-secondary/30 p-2'>
                {
                    showMenu ? <CgCloseO className="text-4xl text-white" /> : <CgMenuRight className="text-4xl text-white" />
                }
            </div>
            <m.div
                animate={showMenu ? show : hide}
                className={`2xl:hidden xl:hidden lg:block hidden fixed top-0 backdrop-blur-md h-screen transition-transform left-0`}
            >
                <div className='flex flex-col justify-between gap-4 px-10 py-5 bg-[#FAFCFF] h-screen w-80'>
                    <div>
                        <Link href="#home">
                            <Image
                                src={logo}
                                alt='Bit Struct-Logo' d
                                placeholder='blur'
                                width={286}
                            />
                        </Link>
                        <ul className='flex gap-3 flex-col pt-10'>
                            <li className='hover:text-primary duration-150 cursor-pointer'>
                                <Link href="#home">
                                    Home
                                </Link>
                            </li>
                            <li className='hover:text-primary duration-150 cursor-pointer'>
                                <a href="#services">
                                    Services
                                </a>
                            </li>
                            <li className='hover:text-primary duration-150 cursor-pointer'>
                                <a href="#industries">
                                    Industries
                                </a>
                            </li>
                            <li className='hover:text-primary duration-150 cursor-pointer'>
                                <a href="#testimonials">
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Button text={'Sign in'} type={"signin"} classList={'bg-secondary text-white'} />
                        <Button text={'Sign up'} type={"signup"} classList={'bg-secondary text-white'} />
                    </div>
                </div>
            </m.div>
        </>
    )
}
