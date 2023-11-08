import { BsArrowRightCircle } from '../../Utils/icons'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'


export default function Button({ text, type, classList }) {
    const mergedClass = twMerge(`capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 hover:font-bold rounded-full px-5 py-2`, classList)
    if (type) {
        return (
            <button>
                <Link
                    className={mergedClass}
                    href={`?modal=true&type=${type.toString()}`}
                    scroll={false}>
                    {text}
                    <BsArrowRightCircle />
                </Link>
            </button>
        )
    }

    return (
        <button
            className={mergedClass}>
            {text}
            <BsArrowRightCircle />
        </button>
    )
}
