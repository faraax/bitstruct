"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { HiDotsHorizontal } from "../Utils/icons";
import basharAllan from "../../public/testimonials/Bashar Allan.jpg";
import ghassanKhoulaghasi from "../../public/testimonials/Ghassan Khoulaghasi.jpg";
import { useEffect, useState } from "react";
import CatModel from "./CatModel";
import axios from "axios";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import Table from "./Table";


const Navbar = dynamic(() => import("../components/Navbar"))

export default function Favorite() {
    const searchParams = useSearchParams()
    // const token = Cookies.get('jwtToken')
    const [portalData, setPortalData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();

        const getFavData = async () => {
            setLoading(true)
            setError(null)
            setPortalData(null)
            try {
                let reqOptions = {
                    url: `/api/view-favorites`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `JWT ${token}`
                    },
                }
                let resp = await axios.request(reqOptions);
                // console.log(resp);
                setPortalData(resp.data.data)
                setError(null)
            } catch (err) {
                console.log(err);
                setError(err)
            }finally {
                setLoading(false)
            }
        }

        if (!portalData) {
            getFavData()
        }

        return () => {
            controller.abort()
        }
    }, [portalData])

    return (
        <div className="col-span-10 relative">
            <Navbar />
            {/* <div className="px-10 py-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-4xl">Today</h2>
                    <h2 className="text-mute text-4xl">Tommorow</h2>
                </div>
            </div>

            <div className="grid grid-cols-3 px-10 gap-7">

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">New Awarded</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-blue-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-orange-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">In Progress</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-orange-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-purple-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">Complete</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-purple-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">Downloads</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-blue-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full mt-7">
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-orange-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full mt-7">
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-purple-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="px-10 py-5">
                <div className="text-lg font-medium mt-5">
                    <h2>Favorite Counties</h2>
                    <div className="overflow-auto w-full">
                        {
                            !portalData && <h2 className={`text-mute mt-3`}>
                                {
                                    loading ? (
                                        <div className="flex items-center gap-2 p-3 rounded-lg font-bold cursor-wait w-full">
                                            <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                                <path
                                                    className="fill-secondary"
                                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                                <path
                                                    className="fill-primary"
                                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                            </svg>
                                            <span className="text-lg">loading please wait</span>
                                        </div>
                                    ) : (error) ? <span className="text-red-500">{error}</span> : 'No Favorite Counties found'}</h2>
                        }
                        <Table
                            portalData={portalData}
                            searchParams={searchParams.toString()}
                        />
                    </div>
                </div>
            </div>
            <CatModel portalData={portalData} />
        </div>
    )
}
