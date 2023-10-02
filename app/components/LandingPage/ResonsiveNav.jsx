import Link from 'next/link'

export default function ResonsiveNav() {
    return (
        <div className='absolute h-screen w-96 left-0 bg-red-200'>
            <div>
                <ul className='flex flex-col gap-3'>
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
        </div>
    )
}
