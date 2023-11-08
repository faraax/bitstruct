"use client"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { navTitles } from "@/app/Utils/SidebarList"
import { useAuthContext } from "@/app/hooks/useAuthContext"

const ProtectedRoutes = dynamic(() => import("../ProtectedRoutes"))
const Sidebar = dynamic(() => import("../Sidebar"))


export default function Layout({ children }) {
    const { user, profiles, authIsReady } = useAuthContext()
    const pathname = usePathname()
    const protectedRoutes = navTitles.map(list => list.url)
    return authIsReady && (
        <main className={user && profiles ? 'grid grid-cols-12' : ''}>
            <ProtectedRoutes path={pathname} user={user} >
                {protectedRoutes.includes(pathname) && <Sidebar />}
                {children}
            </ProtectedRoutes>
        </main>
    )
}
