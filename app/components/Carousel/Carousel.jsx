"use client"
import Image from 'next/image';
import Balancer from "react-wrap-balancer";
import { VscQuote } from "../../Utils/icons";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'


export default function Carousel({ images, autoSlide = true, autoSlideIntervel = 3 }) {
    const [curr, setCurr] = useState(0)

    const prev = () => {
        setCurr((curr) => curr === 0 ? images.length - 1 : curr - 1)
    }

    const next = () => {
        setCurr((curr) => curr === images.length - 1 ? 0 : curr + 1)
    }

    useEffect(() => {
        if (!autoSlide) return
        const setInter = setInterval(next, autoSlideIntervel * 1000);
        return () => clearInterval(setInter)
    })

    return (
        <div className='flex flex-col overflow-hidden gap-4'>
            <div className='flex flex-nowrap relative '>
                {
                    images.map((data) => (
                        <div key={data.id} className='w-full flex-none transition-transform ease-in-out duration-700' style={{ transform: `translateX(-${curr * 100}%)` }}>
                            <div className="flex gap-1 py-5 ">
                                <VscQuote className="text-5xl text-primary" />
                                <p className='text-lg 3xl:text-2xl 2xl:text-2xl xl:text-lg text-white flex items-start justify-start gap-3 relative'>
                                    <Balancer>
                                        {data.review}
                                    </Balancer>
                                </p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <Image
                                    height={'auto'}
                                    width={'auto'}
                                    src={data.imgSrc}
                                    className='rounded-full object-cover aspect-square 3xl:w-20 2xl:w-20 xl:w-20 w-20 3xl:h-20 2xl:h-20 xl:h-20 h-20 '
                                    alt='review'
                                />
                                <div className="flex justify-between w-full items-center">
                                    <div>
                                        <h2 className="text-primary text-lg 3xl:text-xl 2xl:text-xl xl:text-lg">{data.name}</h2>
                                        <p className="text-base text-opacity-60 text-white">{data.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='absolute right-0 bottom-0 hidden items-center gap-4 3xl:flex 2xl:flex xl:flex lg:flex md:flex sm:flex xl:hidden'>
                    <button
                        onClick={prev}
                        className='flex justify-center items-center text-3xl h-10 w-10 bg-white/80 rounded-full shadow text-gray-800 hover:bg-white'>
                        <MdKeyboardArrowLeft />
                    </button>
                    <button
                        onClick={next}
                        className='flex justify-center items-center text-3xl h-10 w-10 bg-white/80 rounded-full shadow text-gray-800 hover:bg-white'>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                {
                    images.map((_, i) => (
                        <div
                            key={i} className={`duration-150 w-2 h-2 bg-white rounded-full ${curr === i ? 'p-2' : "bg-opacity-50"}`}
                        />
                    ))
                }
            </div>
        </div >
    )
}
