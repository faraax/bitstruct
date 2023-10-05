"use client"
import { useAuthContext } from "@/app/hooks/useAuthContext"
import { usePathname } from "next/navigation"
import ProtectedRoutes from "../ProtectedRoutes"
import Sidebar from "../Sidebar"
import { navTitles } from "@/app/Utils/SidebarList"

export default function Layout({ children }) {
    const { user } = useAuthContext()
    const pathname = usePathname()
    const protectedRoutes = navTitles.map(list => list.url)
    return (
        <main className={user ? 'flex' : ''}>
            <ProtectedRoutes path={pathname} user={user} >
                {protectedRoutes.includes(pathname) && <Sidebar />}
                {children}
            </ProtectedRoutes>
        </main>
    )
}
