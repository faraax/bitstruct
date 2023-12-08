"use client"
import { motion as m } from 'framer-motion'
import { CgCloseO } from '../Utils/icons'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function CatModel({ portalData }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const catIndex = searchParams.get('index')
    const modalRef = useRef()

    useEffect(() => {

        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                router.push('/dashboard', { scroll: false })
            }
        };
        window.addEventListener('keydown', handleEsc);

        const outSideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                router.push('/dashboard', { scroll: false })
            }
        };
        window.addEventListener('mousedown', outSideClick);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('mousedown', outSideClick);
        };
    }, [router]);

    if (searchParams.get('catsModel') === "show")
        return (
            <m.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                className='h-screen w-full fixed top-0 left-0 backdrop-blur-md flex justify-center items-center z-50'
            >
                <div ref={modalRef} className='bg-[#CECEDC] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-16 rounded-xl w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col gap-4 max-h-[75%] overflow-y-auto'>
                    <div className='flex justify-between items-center sticky top-0 bg-[#CECEDC] sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16'>
                        <h2 className='text-primary font-normal text-4xl'>CategoriesList</h2>
                        <button onClick={() => {
                            router.back()
                        }}>
                            <CgCloseO className="text-3xl hover:text-primary/60 cursor-pointer duration-150" />
                        </button>
                    </div>
                    <div>
                        <ul>
                            {
                                portalData?.portal_data[catIndex].CategoriesList.map((catList, _i) => (
                                    <li key={_i}>
                                        {_i + 1} - {catList}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </m.div>

        )
}
