import { redirect } from "next/navigation"
// import { navTitles } from "../Utils/SidebarList"

export default function ProtectedRoutes({ children, user, path }) {
    // const protectedRoutes = navTitles.map(list => list.url)
    const protectedRoutes = ["/dashboard", "/favorite", "/settings", '/setup-profile']
    if (!user && protectedRoutes.includes(path)) return redirect('/')
    return (
        <>
            {children}
        </>
    )
}
