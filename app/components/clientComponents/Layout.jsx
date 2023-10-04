"use client"
import { useAuthContext } from "@/app/hooks/useAuthContext"

export default function Layout({ children }) {
    const { user } = useAuthContext()
    return (
        <main className={user ? 'flex' : ''}>
            {children}
        </main>
    )
}
