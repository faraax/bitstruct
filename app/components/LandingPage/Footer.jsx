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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 border-stone-200 border-b-2 border-opacity-30'>

                {/* Column 1 */}
                <div className='py-7 px-4 xs:px-1 xs:mx-auto'>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={200}
                        height={"auto"}
                        className='py-4'
                    />
                    <p className='text-white text-center'>+1 646 905 0356</p>
                    <p className='text-white text-center'>info@bidstruct.com</p>
                </div>

                {/* Column 2 */}
                <div className='py-7 px-4 xs:px-1 3xl:block 2xl:block xl:block lg:block md:block sm:block xs:hidden block'>
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

                {/* Column 3 */}
                <div className='py-7 px-4 xs:px-1 xs:mx-auto'>
                    <p className='text-xl text-white'>Industries</p>
                    <ul className='flex flex-col justify-center text-white/70 cursor-pointer pt-3'>
                        <li className='hover:text-primary duration-150'>Services</li>
                        <li className='hover:text-primary duration-150'>Industries</li>
                        <li className='hover:text-primary duration-150'>Testimonials</li>
                    </ul>
                </div>

                {/* Column 4 */}
                {/* <div className='py-7 px-4 xs:px-1 xs:mx-auto 3xl:col-span-1 lg:col-span-1 md:col-span-full xs:col-span-full'>
                    <div className='flex 3xl:flex-col 2xl:flex-col xl:flex-col lg:flex-col md:flex-row xs:flex-col gap-3 text-2xl text-white/70 h-full'>
                        <div className='flex sm:gap-3 gap-3 items-center flex-row sm:flex-row xs:flex-col xs:gap-0'>
                            <SiInstagram />
                            <p className='text-base'>Instagram</p>
                        </div>
                        <div className='flex sm:gap-3 gap-3 items-center flex-row sm:flex-row xs:flex-col xs:gap-0'>
                            <FaFacebookF />
                            <p className='text-base'>Facebook</p>
                        </div>
                        <div className='flex sm:gap-3 gap-3 items-center flex-row sm:flex-row xs:flex-col xs:gap-0'>
                            <BiLogoLinkedin />
                            <p className='text-base'>LinkedIn</p>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className='flex justify-center items-center py-2'>
                <p className='text-white text-center'>Copyright © <span className='hero-gradient font-bold'> Bit Struct {currentYear} </span>. All Rights Reserved</p>
            </div>
        </footer>
    )
}
