import React, { cache } from 'react'
import dynamic from 'next/dynamic'
import { TiTick } from 'react-icons/ti';

const Button = dynamic(() => import('./clientComponents/Button'))

const getCachePrice = cache(
    async function getPrice() {
        const { signal } = new AbortController()
        let res = await fetch("https://api.bidstruct.com/api/get-package-details", {
            method: "POST",
            cache: "force-cache",
            signal
        });
        return res.json()
    }
)
export default async function PriceCards() {
    const { data } = await getCachePrice();
    return (
        <section className="w-full py-12 x-container bg-white">
            <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-3xl text-3xl py-10'>Find a better package <span className='hero-gradient font-medium'>
                that fits you
            </span>
            </h2>
            <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 xs:px-0 3xl:px-4 md:px-6 gap-5">
                {
                    data
                        .slice()
                        .sort((a, b) => a.price_deatils.unit_amount - b.price_deatils.unit_amount)
                        .map(({ name, metadata, price_deatils, id, description }) => (
                            <div key={id} className={`flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between ${name === 'Annual Pro Plan - 25% Savings' && 'border-primary border-4 relative'}`}>
                                {
                                    name === 'Annual Pro Plan - 25% Savings' && (
                                        <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-primary rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            25% Savings
                                        </div>
                                    )
                                }
                                <div>
                                    <h3 className="text-2xl font-bold text-center">{name}</h3>
                                    <div className="mt-4 text-center text-zinc-600">
                                        <span className="text-4xl font-bold">${price_deatils.unit_amount}</span>
                                    </div>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center">
                                            <span className={`bg-secondary rounded-full mr-2 p-1`}>
                                                <TiTick className="text-white text-xl" />
                                            </span>
                                            {metadata.Profiles} {metadata.Profiles === '1' ? 'Profile' : 'Profiles'}
                                        </li>
                                        {
                                            description.split("|").filter(item => item.trim() !== '').map((value, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className={`bg-secondary rounded-full mr-2 p-1`}>
                                                        <TiTick className="text-white text-xl" />
                                                    </span>
                                                    {value.trim()}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="mt-6 flex justify-center items-center">
                                    <Button text={'Get Started'} type={"signup"} classList={'text-white bg-white w-full rounded-xl bg-primary bg-secondary'} />
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}

