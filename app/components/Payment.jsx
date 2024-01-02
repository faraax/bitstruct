import Image from "next/image";
import payment from '../../public/payment.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import PriceCards from "./PriceCards";
import { TiTick } from "react-icons/ti";

// const getCachePrice = cache(
//     async function getPrice() {
//         const { signal } = new AbortController()
//         let res = await fetch("https://api.bidstruct.com/api/get-package-details", {
//             method: "POST",
//             cache: "force-cache",
//             signal
//         });
//         return res.json()
//     }
// )

export default function Payment({ isPending, setIsPending }) {
    // const [quantity, setQuantity] = useState(0)
    const [data, setData] = useState(null)
    const [link, setLink] = useState(false)

    useEffect(() => {
        async function getPrice() {
            setIsPending(true)
            const { signal } = new AbortController()
            try {
                let res = await fetch("/api/get-package-details", {
                    method: "POST",
                    signal
                });
                return res.json()
            } catch (err) {
                return err
            } finally {
                setIsPending(false)
            }
        }
        getPrice()
            .then(({ data }) => {
                setData(data)
            })
            .catch(err => console.log(err))
    }, [setIsPending])

    const handleFormSubmit = async (default_price) => {
        const formData = new FormData();
        formData.append("price", default_price)
        setIsPending(true)
        try {
            let reqOptions = {
                url: `/api/checkout`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `JWT ${Cookies.get('jwtToken')}`
                },
                data: formData,
            }

            let { data } = await axios.request(reqOptions);
            setLink(data.url)
        }
        catch (err) {
            console.log("Login Err =>", err);
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4">
            {/* <div className="flex justify-center items-center flex-col gap-2">
                <div className="w-60 h-60 rounded-full overflow-hidden border-mute border-2">
                    <Image
                        src={payment}
                        alt='Profile'
                        width={'auto'}
                    />
                </div>
                <h2 className="text-4xl">Select No. Profiles</h2>
            </div>
            <div>
                <form
                    onSubmit={handleFormSubmit} className="flex gap-3">
                    <input
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                        name="profileName"
                        id="profileName"
                        value={quantity}
                        className="placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-2 py-2 border rounded-xl"
                        placeholder="Number of Profile"
                        required
                    />
                    {!link && !isPending && <button
                        className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                        Save
                    </button>}
                    {
                        isPending && <button
                            disabled
                            className="gap-3 relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl cursor-wait">
                            <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                <path
                                    className="fill-white"
                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                <path
                                    className="fill-primary"
                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                            </svg>
                            <span className="text-white">Loading...</span>
                        </button>
                    }
                    {link && <a href={link}
                        className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                        Process to checkout
                    </a>}
                </form>
            </div> */}
            {/* <PriceCards /> */}
            {
                isPending ? (
                    <div className="flex justify-center items-center gap-2 p-3 rounded-lg font-bold cursor-wait w-full text-secondary">
                        <svg className="h-16 w-16 animate-spin" viewBox="3 3 18 18">
                            <path
                                className="fill-secondary"
                                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                            <path
                                className="fill-primary"
                                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                        </svg>
                        <span className="text-5xl">Loading...</span>
                    </div>
                ) : (
                    <div className={link ? 'hidden' : ''}>
                        <h2 className="text-3xl text-center py-5">Select you plan</h2>
                        <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 xs:px-0 3xl:px-4 md:px-6 gap-5">
                            {
                                data
                                    ?.slice()
                                    .sort((a, b) => a.price_deatils.unit_amount - b.price_deatils.unit_amount)
                                    .map(({ name, metadata, price_deatils, id, description, default_price }) => (
                                        <div key={id}
                                            className={`flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between ${name === 'Annual Pro Plan - 25% Savings' && 'border-primary border-4 relative'}`}>
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
                                                {isPending && <button
                                                    disabled
                                                    className="text-white rounded-xl bg-secondary capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 hover:font-bold  px-5 py-2 cursor-wait">
                                                    <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                                        <path
                                                            className="fill-white"
                                                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                                        <path
                                                            className="fill-primary"
                                                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                                    </svg>
                                                    <span className="text-white">Loading...</span>
                                                </button>}
                                                {
                                                    !link && !isPending && <button
                                                        onClick={() => handleFormSubmit(default_price)}
                                                        className="text-white rounded-xl bg-secondary capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 hover:font-bold  px-5 py-2">
                                                        Select
                                                    </button>
                                                }

                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                )
            }
            {link && <div className="flex justify-center items-center flex-col gap-2">
                <div className="w-60 h-60 rounded-full overflow-hidden border-mute border-2">
                    <Image
                        src={payment}
                        alt='Profile'
                        width={'auto'}
                    />
                </div>
                <a href={link}
                    className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                    Process to checkout
                </a>
            </div>}
        </div >
    )
}
