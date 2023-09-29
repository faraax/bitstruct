import Image from 'next/image'
import logo from '../../../public/BidStruct-Dark.png'
import Link from 'next/link'
import Button from '../clientComponents/Button'


export default function Nav() {
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
                <Button text={'Sign in'} type={"signin"} />
                <Button text={'Sign up'} type={"signup"} />
            </div>
        </nav >
    )
}
