"use client"

import { motion as m } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CgCloseO } from '../../Utils/icons'
import { useCallback, useEffect, useRef } from 'react'

export default function Modal() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const modalRef = useRef()
    const pathname = usePathname()
    const type = searchParams.get('type')

    useEffect(() => {

        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                router.push('/')
            }
        };
        window.addEventListener('keydown', handleEsc);

        const outSideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                router.push('/')
            }
        };
        window.addEventListener('mousedown', outSideClick);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('mousedown', outSideClick);
        };
    }, []);

    const createQueryString = useCallback(
        (name, value, type) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            params.set('type', type)
            return params.toString()
        },
        [searchParams]
    )

    if (searchParams.get('modal') === "true")
        return (
            <m.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                className='h-screen w-screen fixed top-0 left-0 backdrop-blur-md flex justify-center items-center z-10'
            >
                <div className='bg-[#CECEDC] p-10 rounded-xl h-2/4 flex flex-col gap-4 w-2/5' ref={modalRef}>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-primary font-normal text-4xl'>Welcome</h2>
                            <button onClick={() => {
                                router.push('/')
                            }}>
                                <CgCloseO className="text-3xl hover:text-primary/60 cursor-pointer duration-150" />
                            </button>
                        </div>
                        <p>Fill you email & password to {type === "signin" ? 'Sign In' : 'Sign Up'}</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='flex flex-col text-xl'>
                            Email Address
                        </label>
                        <input type="text" name="email" id="email" className='bg-[#CECEDC] py-2 px-5 rounded-full border border-stone-700 placeholder:text-stone-700' placeholder='You Email Address' />
                        <label className='flex flex-col text-xl'>
                            Password
                        </label>
                        <input type="password" name="password" id="password" className='bg-[#CECEDC] py-2 px-5 rounded-full border border-stone-700 placeholder:text-stone-700' placeholder='Type Your Password' />
                        <div className='flex items-center flex-col w-full'>
                            <button
                                className='bg-secondary py-3 px-6 rounded-full text-white'>
                                {type === "signin" ? 'Signin' : 'Signup'}
                            </button>
                        </div>
                        <div className='flex justify-between items-center'>
                            {
                                type === "signin" && (<p>Don't have an account? <span
                                    className='text-secondary hover:underline cursor-pointer'
                                    onClick={() => router.push(pathname + '?' + createQueryString("modal", 'true', "signup"))}>
                                    Sign up
                                </span>
                                </p>
                                )
                            }
                            {
                                type === "signup" && (
                                    <p>Already have an account? <span
                                        className='text-secondary hover:underline cursor-pointer'
                                        onClick={() => router.push(pathname + '?' + createQueryString("modal", 'true', "signin"))}>
                                        Sign up
                                    </span>
                                    </p>
                                )
                            }
                            {type === "signup" && <p className='text-secondary hover:underline cursor-pointer'>Forgot Password</p>}

                    </div>
                </div>
            </div>
            </m.div >
        )
}