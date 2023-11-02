"use client"
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion as m } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import logo from '../../../public/BidStruct_Logo.png'
import { CgMenuRight, CgCloseO } from '../../Utils/icons'

const Button = dynamic(() => import('./Button'))

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
    const sidebarRef = useRef()

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) {
                setShowMenu(false)
            }
        }
        window.addEventListener('keydown', handleEsc);
        const outSideClick = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setShowMenu(false)
            }
        };
        window.addEventListener('mousedown', outSideClick);
        return () => {
            window.removeEventListener('mousedown', outSideClick);
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    return (
        <>
            <div
                onClick={() => setShowMenu(!showMenu)}
                className='3xl:hidden 2xl:hidden xl:hidden lg:block md:block sm:block xs:block block hover:bg-secondary/30 p-2'
            >
                {
                    showMenu && <CgMenuRight className="text-4xl text-gray-400 2xl:hidden xl:v lg:hidden md:hidden sm:hidden xs:block block" />
                }
                {
                    showMenu ? <CgCloseO className="text-4xl text-gray-400 2xl:block xl:block lg:block md:block sm:block xs:hidden hidden" /> : <CgMenuRight className="text-4xl text-gray-400" />
                }
            </div>
            <m.div
                animate={showMenu ? show : hide}
                className={`3xl:hidden 2xl:hidden xl:hidden lg:block md:block sm:block xs:block block fixed top-0 backdrop-blur-md h-screen left-0`}
                ref={sidebarRef}
            >
                <div className='flex flex-col justify-between gap-4 bg-[#FAFCFF] h-screen w-80'>
                    <div>
                        <div className='p-5 relative'>
                            <Link href="#home">
                                <Image
                                    src={logo}
                                    alt='Bit Struct-Logo' d
                                    placeholder='blur'
                                    width={250}
                                />
                            </Link>
                            <div onClick={() => setShowMenu(!showMenu)} className='absolute top-1/2 right-4 -translate-y-1/2 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block block'>
                                <CgCloseO className="text-2xl" />
                            </div>
                        </div>
                        <ul className='flex gap-3 flex-col pt-10 px-10 py-5'>
                            <li onClick={() => setShowMenu(!showMenu)} className='hover:text-primary duration-150 cursor-pointer'>
                                <Link href="#home">
                                    Home
                                </Link>
                            </li>
                            <li onClick={() => setShowMenu(!showMenu)} className='hover:text-primary duration-150 cursor-pointer'>
                                <a href="#services">
                                    Services
                                </a>
                            </li>
                            <li onClick={() => setShowMenu(!showMenu)} className='hover:text-primary duration-150 cursor-pointer'>
                                <a href="#industries">
                                    Industries
                                </a>
                            </li>
                            <li onClick={() => setShowMenu(!showMenu)} className='hover:text-primary duration-150 cursor-pointer'>
                                <a href="#testimonials">
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 px-10 py-5'>
                        <Button text={'Sign in'} type={"signin"} classList={'bg-secondary text-white'} />
                        <Button text={'Sign up'} type={"signup"} classList={'bg-secondary text-white'} />
                    </div>
                </div>
            </m.div>
        </>
    )
}
