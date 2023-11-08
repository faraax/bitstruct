"use client"
import axios from "axios"
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { RiLayout2Fill, BsFillBuildingsFill, IoPerson } from "../Utils/icons"
import { useSearchParams } from "next/navigation"
// import CatModel from "./catModel"

const Table = dynamic(() => import("./Table"))
const CatModel = dynamic(() => import("./CatModel"))

const Cards = dynamic(() => import("../components/Cards"))
const Navbar = dynamic(() => import("../components/Navbar"))
const BidsFilter = dynamic(() => import("../components/BidsFilter"))

const dashboardCards = [
    {
        id: 1,
        icon: <RiLayout2Fill className="text-4xl text-primary" />,
        heading: "Total Bids",
        totalBids: '8,980',
        percentage: '+10%'
    },
    {
        id: 2,
        icon: <BsFillBuildingsFill className="text-4xl text-primary" />,
        heading: "Total Areas",
        totalBids: '5,906',
        percentage: '+10%'
    },
    {
        id: 3,
        icon: <IoPerson className="text-4xl text-primary" />,
        heading: "Total Vendors",
        totalBids: '3,430',
        percentage: '+10%'
    }
]

export default function DashboardPage() {
    const searchParams = useSearchParams()
    const portalid = searchParams.get('portalid') ? searchParams.get('portalid') : null
    // const catsModelShow = searchParams.get('catsModel') === "show" ? true : false
    const [portalData, setPortalData] = useState(null)
    const [loading, setLoading] = useState(false)
    // console.log(catsModelShow);

    useEffect(() => {
        const controller = new AbortController();

        const getPortalData = async () => {
            setPortalData(null)
            setLoading(true)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getPortalData`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${Cookies.get('jwtToken')}`
                    },
                    data: { portalId: portalid }
                }
                let { data } = await axios.request(reqOptions, { signal: controller.signal });
                setPortalData(data)
                if (data) {
                    setLoading(false)
                }
            } catch (err) {
                setPortalData(null)
                setLoading(false)
                console.log(err);
            }
        }

        if (portalid) {
            getPortalData()
        }

        return () => {
            controller.abort()
        }
    }, [portalid])

    return (
        <div className="col-span-10 relative">
            <Navbar />
            <div className="px-10 py-5">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-4">
                        <h2 className="text-lg font-medium mb-3">Dashboard</h2>
                        <div className="grid grid-cols-3 gap-7">
                            {
                                dashboardCards.map((cardsData, index) => (
                                    <div key={index} className="flex flex-col p-5 gap-1 border border-mute border-opacity-20 rounded-lg bg-white col-span-1">
                                        <Cards icon={cardsData.icon} totalBids={cardsData.totalBids} percentage={cardsData.percentage} heading={cardsData.heading} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-span-2">
                        <BidsFilter />
                    </div>
                </div>
                <div className="text-lg font-medium mt-5">
                    <h2>Bid Opportunities</h2>
                    <div className="overflow-auto w-full">
                        {
                            !portalData && <h2 className="text-mute mt-3">
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
                                            <span className="text-lg">Please wait while the data is being scraped</span>
                                        </div>
                                    ) : 'Select Portal Id to scrape data'}</h2>
                        }
                        <Table portalData={portalData} />
                    </div>
                </div>
            </div>
            <CatModel portalData={portalData} />
        </div>
    )
}
