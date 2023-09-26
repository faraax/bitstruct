"use client"
import { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'


export default function Carousel({ images, autoSlide = true, autoSlideIntervel = 3000 }) {
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
        <>
            <div className="flex gap-1">
                <VscQuote className="text-5xl text-primary" />
                <p className='text-xl text-white flex items-start justify-start gap-3 relative'>
                    <Balancer>
                        BidStruct has become an integral part of my everyday routine. The value of your information and the ability your service gives us to prospect for new jobs has made a huge impact for our company.
                    </Balancer>
                </p>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    src={basharAllan}
                    className='rounded-full object-cover aspect-square w-20 h-20'
                />
                <div className="flex justify-between w-full items-center">
                    <div>
                        <h2 className="text-primary text-xl">Bashar Allan</h2>
                        <p className="text-base text-opacity-60 text-white">,SDS Structual Engineers</p>
                    </div>
                    <div>
                        <p className="text-white">asd</p>
                    </div>
                </div>
            </div>
        </>
    )
}
