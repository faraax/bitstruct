"use client"
import { motion as m } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CgCloseO } from '../../Utils/icons'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useAuthContext } from '@/app/hooks/useAuthContext'
import useAuth from '@/app/hooks/useAuth'

export default function Modal() {
    const searchParams = useSearchParams()
    const modalRef = useRef()
    const router = useRouter()
    const pathname = usePathname()
    const type = searchParams.get('type')
    const { user } = useAuthContext()
    const { userLogin, loading, error, message, userSignup } = useAuth()
    const [userCredential, setUserCredential] = useState({
        email: "",
        password: ""
    })

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
    }, [router]);

    const createQueryString = useCallback(
        (name, value, type) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            params.set('type', type)
            return params.toString()
        },
        [searchParams]
    )

    const handleCredentials = (e) => {
        const { value, name } = e.target
        setUserCredential({
            ...userCredential,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        type === "signup" ? userSignup(userCredential) : userLogin(userCredential)
        // message === "User registered successfully" ? /* router.push(pathname + '?' + createQueryString("modal", 'true', "signin")) */ console.log("askljdf") : null 
    }

    if (searchParams.get('modal') === "true" && user === false)
        return (
            <m.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                className='h-screen w-screen fixed top-0 left-0 backdrop-blur-md flex justify-center items-center z-10'
            >
                <div className='bg-[#CECEDC] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-xl w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col gap-4' ref={modalRef}>
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
                    <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
                        <label className='flex flex-col text-xl'>
                            Email Address
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className='bg-[#CECEDC] py-2 px-5 rounded-full border border-stone-700 placeholder:text-stone-700'
                            placeholder='You Email Address'
                            onChange={handleCredentials}
                            required
                        />
                        <label className='flex flex-col text-xl'>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className='bg-[#CECEDC] py-2 px-5 rounded-full border border-stone-700 placeholder:text-stone-700'
                            placeholder='Type Your Password'
                            onChange={handleCredentials}
                            required
                        />
                        <div className='flex items-center flex-col w-full'>
                            {
                                loading && <button disabled className='flex bg-secondary/80 py-3 px-5 rounded-full text-white cursor-wait gap-2'>
                                    <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                        <path
                                            className="fill-white"
                                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                        <path
                                            className="fill-primary"
                                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                    </svg>
                                    <span>Loading...</span>
                                </button>
                            }
                            {
                                !loading && <button
                                    className='bg-secondary py-3 px-6 rounded-full text-white'
                                >
                                    {type === "signin" ? 'Signin' : 'Signup'}
                                </button>
                            }

                        </div>
                        {
                            error && (
                                <div className='flex justify-center items-center'>
                                    <h2 className='text-red-500'>{error}</h2>
                                </div>
                            )
                        }
                        {
                            message && (
                                <div className='flex justify-center items-center'>
                                    <h2 className='text-red-500'>{message}</h2>
                                </div>
                            )
                        }
                        <div className='flex justify-between items-center'>
                            {
                                type === "signin" && (<p>Don{`'`}t have an account? <span
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
                                        onClick={() => {
                                            router.push(pathname + '?' + createQueryString("modal", 'true', "signin"))
                                            // dispatch({ type: 'LOGIN' })
                                        }}>
                                        Sign up
                                    </span>
                                    </p>
                                )
                            }
                            {type === "signup" && <p className='text-secondary hover:underline cursor-pointer'>Forgot Password</p>}

                        </div>
                    </form>
                </div>
            </m.div >
        )
}
