"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function SidebarList({ list }) {
    const pathname = usePathname()
    return (
        <li className={`text-xl text-mute flex gap-4 ${pathname === list.url ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
            {list.icon}
            <Link href={list.url} className='text-sm text-center flex items-center justify-center'>
                {list.title}
            </Link>
        </li>
    )
}
