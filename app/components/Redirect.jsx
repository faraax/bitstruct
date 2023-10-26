import { redirect } from "next/navigation"

export default function Redirect({ children, profiles }) {
    if (profiles) return redirect('/dashboard')
    return (
        <div>
            {children}
        </div>
    )

}
