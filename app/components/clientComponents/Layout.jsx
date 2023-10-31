"use client"
import { useAuthContext } from "@/app/hooks/useAuthContext"
import { usePathname } from "next/navigation"
import ProtectedRoutes from "../ProtectedRoutes"
import Sidebar from "../Sidebar"
import { navTitles } from "@/app/Utils/SidebarList"

export default function Layout({ children }) {
    const { user, profiles } = useAuthContext()
    const pathname = usePathname()
    const protectedRoutes = navTitles.map(list => list.url)
    return (
        <main className={user && profiles ? 'grid grid-cols-12' : ''}>
            <ProtectedRoutes path={pathname} user={user} >
                {protectedRoutes.includes(pathname) && <Sidebar />}
                {children}
            </ProtectedRoutes>
        </main>
    )
}
