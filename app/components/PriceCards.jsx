import React from 'react'
import dynamic from 'next/dynamic'
import { pricePlans } from '../Utils/pricePlans'

const Button = dynamic(() => import('./clientComponents/Button'))


export default function PriceCards() {
    return (
        <section className="w-full py-12 x-container bg-white">
            <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-3xl text-3xl py-10'>Find a better package <span className='hero-gradient font-medium'>
                that fits you
            </span>
            </h2>
            <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 xs:px-0 3xl:px-4 md:px-6 gap-5">
                {
                    pricePlans.map((priceList) => (
                        <div key={priceList.id} className={priceList.className}>
                            {
                                priceList.popular && (
                                    <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-primary rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        Popular
                                    </div>
                                )
                            }
                            <div>
                                <h3 className="text-2xl font-bold text-center">{priceList.title}</h3>
                                <div className="mt-4 text-center text-zinc-600">
                                    <span className="text-4xl font-bold">{priceList.price}</span>/ month{"\n                          "}
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {
                                        priceList.features.map((featuresList, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className={`${featuresList.icon.key === "true" ? 'bg-secondary' : 'bg-mute'} rounded-full mr-2 p-1`}>
                                                    {featuresList.icon}
                                                </span>
                                                {featuresList.services}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="mt-6 flex justify-center items-center">
                                <Button text={'Get Started'} type={"signup"} classList={'text-white bg-white w-full 3xl:w-2/3 2xl:w-2/3 xl:w-2/3 lg:w-full md:w-full rounded-xl bg-primary bg-secondary'} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
