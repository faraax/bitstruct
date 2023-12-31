import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import logo from '../../../public/BidStruct-Dark.png'

const Button = dynamic(() => import("../clientComponents/Button"))
const ResponsiveSidebar = dynamic(() => import('../clientComponents/ResponsiveSidebar'))

export default function Nav() {
    return (
        <nav className='flex justify-between items-center x-container py-7 sticky top-0 z-10 backdrop-blur-lg border-stone-200/30 border-b-[0.1px]'>
            <div className='flex justify-center items-center gap-10 text-white '>
                <Link href="#home">
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286}
                    />
                </Link>
                <ul className='gap-3 hidden 2xl:flex xl:flex text-gray-400'>
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
            <div className='gap-4 hidden 2xl:flex xl:flex'>
                <Button text={'Sign in'} type={"signin"} classList={'hover:text-secondary bg-white border-[0.1px]'} />
                <Button text={'Sign up'} type={"signup"} classList={'hover:text-secondary bg-white border-[0.1px]'} />
            </div>
            <ResponsiveSidebar />
        </nav >
    )
}
