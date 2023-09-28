import Image from 'next/image'
import logo from '../../../public/BidStruct-Dark.png'
import { BsArrowRightCircle } from '../../Utils/icons'
import Link from 'next/link'


export default function Nav({ params }) {
    console.log(params)
    return (
        <nav className='flex justify-between items-center px-28 py-7 h-24 sticky top-0 z-10 backdrop-blur-md border-stone-200/30 border-b-[0.1px]'>
            <div className='flex justify-center items-center gap-10 text-white'>
                <Link href="#home">
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286}
                    />
                </Link>
                <ul className='flex gap-3'>
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
