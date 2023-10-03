"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import { BsArrowRightCircle } from '../../Utils/icons'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function Button({ text, type, classList }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name, value, type) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            params.set('type', type)
            // params.delete()
            return params.toString()
        },
        [searchParams]
    )

    return (
        <button
            onClick={() => {
                router.push(pathname + '?' + createQueryString("modal", 'true', type.toString()))
            }}
            className={`capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 hover:font-bold rounded-full px-5 py-2 ${classList}`}>
            {text}
            <BsArrowRightCircle />
        </button>
    )
}
