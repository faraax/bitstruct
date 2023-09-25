import Image from 'next/image'
import logo from '../../public/BidStruct-Dark.png'
import { BsArrowRightCircle } from '../Utils/icons'


export default function Nav() {
    return (
        <nav className='flex justify-between items-center px-28 py-7 h-24 sticky top-0 z-10 backdrop-blur-md border-stone-800 border-b-[0.1px]'>
            <div className='flex justify-center items-center gap-10 text-white'>
                <Image
                    src={logo}
                    alt='Bit Struct-Logo'
                    placeholder='blur'
                    width={286}
                />
                <ul className='flex gap-3'>
                    <li className='hover:text-primary duration-150 cursor-pointer'>Services</li>
                    <li className='hover:text-primary duration-150 cursor-pointer'>Industries</li>
                    <li className='hover:text-primary duration-150 cursor-pointer'>Testimonials</li>
                    <li className='hover:text-primary duration-150 cursor-pointer'>Contact us</li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <button className='capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 bg-white rounded-full px-5 py-2 hover:text-secondary hover:font-bold'>
                    Sign in
                    <BsArrowRightCircle />
                </button>
                <button className='capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 bg-white rounded-full px-5 py-2 hover:text-secondary hover:font-bold'>
                    Sign up
                    <BsArrowRightCircle />
                </button>
            </div>
        </nav>
    )
}
