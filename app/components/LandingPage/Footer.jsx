import Image from 'next/image'
import logo from '../../../public/BidStruct-Dark.png'
import { currentYear } from '@/app/Utils/dateFormat'
import {
    SiInstagram,
    FaFacebookF,
    BiLogoLinkedin
} from '@/app/Utils/icons'

export default function Footer() {
    return (
        <footer className='bg-[#0C0838]'>
            <div className='grid grid-cols-4 border-stone-200 border-b-2 border-opacity-30'>
                <div className='py-7 px-28 flex flex-col gap-1'>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={200}
                        height={"auto"}
                        className='py-4'
                    />
                    <p className='text-white'>+1 646 905 0356</p>
                    <p className='text-white'>info@bidstruct.com</p>
                </div>
                <div className='py-7'>
                    <p className='text-xl text-white'>Industries</p>
                    <ul className='flex flex-col justify-center text-white/70'>
                        <li className='hover:text-primary duration-150'>Residential</li>
                        <li className='hover:text-primary duration-150'>Commercial</li>
                        <li className='hover:text-primary duration-150'>Infrastructure</li>
                        <li className='hover:text-primary duration-150'>Specialty Trade Contractors</li>
                        <li className='hover:text-primary duration-150'>Architectural Services</li>
                        <li className='hover:text-primary duration-150'>Government</li>
                        <li className='hover:text-primary duration-150'>Automobile</li>
                    </ul>
                </div>
                <div className='py-7'>
                    <ul className='flex flex-col justify-center text-white/70 cursor-pointer pt-3'>
                        <li className='hover:text-primary duration-150'>Services</li>
                        <li className='hover:text-primary duration-150'>Industries</li>
                        <li className='hover:text-primary duration-150'>Testimonials</li>
                        <li className='hover:text-primary duration-150'>Contact us</li>
                    </ul>
                </div>
                <div className='py-7'>
                    <div className='flex flex-col gap-3 text-2xl text-white/70 h-full'>
                        <div className='flex gap-3 items-center'>
                            <SiInstagram />
                            <p className='text-base'>Instagram</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaFacebookF />
                            <p className='text-base'>Facebook</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <BiLogoLinkedin />
                            <p className='text-base'>LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-2'>
                <p className='text-white'>Copyright © <span className='hero-gradient font-bold'> Bit Struct {currentYear} </span>. All Rights Reserved</p>
            </div>
        </footer>
    )
}
