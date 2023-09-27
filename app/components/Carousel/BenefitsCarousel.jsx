"use client"

import { useEffect, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Balancer from "react-wrap-balancer"


export default function BenefitsCarousel({ array, autoplay = true, autoSlideIntervel = 3 }) {
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent(prev => prev === 0 ? array.length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(prev => prev === array.length - 1 ? 0 : current + 1)
    }

    useEffect(() => {
        if (!autoplay) return
        const setInter = setInterval(next, autoSlideIntervel * 1000)
        return clearInterval(setInter)
    })

    return (
        <>
            <div className="flex gap-7 flex-nowrap w-full overflow-hidden">
                {
                    array.map((data) => {
                        return (
                            <div key={data.id} className="flex-none flex-col gap-3 transition-transform ease-in-out duration-700 w-full" style={{ transform: `translateX(-${current * 100}%)` }}>
                                <h2 className='text-7xl font-medium'><span className='hero-gradient'>{data.id}</span></h2>
                                <h3 className='text-3xl font-semibold py-6'>{data.heading}</h3>
                                <p className='text-xl w-3/4'>
                                    <Balancer>
                                        {data.paragraph}
                                    </Balancer>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex items-center gap-4 p-4'>
                <button
                    onClick={prev}
                    className='flex justify-center items-center text-3xl h-10 w-10 bg-white/80 rounded-full text-gray-800 hover:bg-white border-stone-400 border-2'>
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={next}
                    className='flex justify-center items-center text-3xl h-10 w-10 bg-white/80 rounded-full text-gray-800 hover:bg-white border-stone-400 border-2'>
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </>
    )
}
