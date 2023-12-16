"use client"
import axios from "axios"
import Cookies from "js-cookie"
import { useCallback, useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { MdOutlineKeyboardArrowDown } from "../Utils/icons"
import Link from "next/link"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

export default function BidsFilter() {
    const searchParams = useSearchParams()
    const portalid = searchParams.get('portalid') ? searchParams.get('portalid') : null
    const portalName = searchParams.get('portalName') ? searchParams.get('portalName') : null
    const router = useRouter()
    const pathName = usePathname()
    const { selectedProfile } = useAuthContext()
    const [portalList, setPortalList] = useState(null)
    const [dataFrom, setDataFrom] = useState('')
    const [dataTo, setDataTo] = useState('')
    const [list, setList] = useState(false)
    const [filterError, setFilterError] = useState(false)

    // console.log(state.subscription.product.metadata.Profiles - state.profiles.length);

    useEffect(() => {
        const controller = new AbortController();
        const getProfilePortalList = async () => {
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getProfilePortalList`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${Cookies.get('jwtToken')}`
                    },
                    data: { profileName: selectedProfile }
                }
                let { data } = await axios.request(reqOptions, { signal: controller.signal });
                setPortalList(data)
            } catch (err) {
                console.log(err);
            }
        }
        if (selectedProfile) {
            getProfilePortalList()
        }

        return () => {
            controller.abort()
        }
    }, [selectedProfile])

    const handleClearFilter = () => {
        setDataFrom('')
        setDataTo('')
        setFilterError(false)
    }

    const createQueryString = useCallback(
        (from, fromValue, to, toValue) => {
            const params = new URLSearchParams(searchParams)
            params.set(from, fromValue)
            params.set(to, toValue)

            return params.toString()
        },
        [searchParams]
    )

    const handleApplyFilter = (e) => {
        e.preventDefault()
        if (portalList?.length > 0) {
            setFilterError(false)
            router.push(`${pathName}?${createQueryString('from', dataFrom, 'to', dataTo)}`)
        } else {
            setFilterError(!filterError)
            // setTimeout(() => setFilterError(!filterError), 3000)
        }

    }

    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className="text-lg font-medium mb-3">Filter Bids</h2>
            <div className="flex gap-2 w-full mt-6">
                <button
                    onClick={() => setList(!list)}
                    className="relative w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                >
                    <p className="px-4 text-primary">{portalid ? portalid + '-' + portalName?.substring(0, 35) : 'Portal Id'}</p>
                    <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
                    <div className={`z-30 absolute ${list ? "block" : "hidden"} top-full -right-1 max-h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded`}>
                        <ul className="text-left flex flex-col bg-white text-primary">
                            {
                                portalList?.map((list) => (
                                    list.projectName.map((list, index) => (
                                        <Link href={`?portalid=${list.portalId}&portalName=${list.portalName}`} key={index}>
                                            <li className={`px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary/20  ${portalid === list.portalId && 'bg-primary/20'}`}>
                                                {list.portalId} -
                                                {list.portalName}
                                            </li>
                                        </Link>
                                    ))
                                ))
                            }
                            {
                                portalList?.length === 0 && (
                                    <li className={`px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary/20  ${portalid === list.portalId && 'bg-primary/20'}`}>
                                        Please assign counties to profile.
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </button>
            </div>
            <form onSubmit={handleApplyFilter} className="flex justify-center items-center flex-col">
                <div className="flex gap-2 mt-3 items-baseline w-full">
                    <input type="date"
                        className={`placeholder:text-primary text-primary focus:outline-none focus:ring-1 focus:ring-primary ${filterError ? 'ring-red-400 ring-1' : ""} border-[#BCE0FD] px-5 py-2 border rounded-xl w-1/2`}
                        placeholder="Date from"
                        value={dataFrom}
                        onChange={(e) => setDataFrom(e.target.value)}
                    />
                    <span className="text-center">
                        <p>-</p>
                    </span>
                    <input type="date"
                        className={`placeholder:text-primary text-primary focus:outline-none focus:ring-1 focus:ring-primary ${filterError ? 'ring-red-400 ring-1' : ""} border-[#BCE0FD] px-5 py-2 border rounded-xl w-1/2`}
                        placeholder="Date to"
                        value={dataTo}
                        onChange={(e) => setDataTo(e.target.value)}
                    />
                </div>

                {/* <div className="flex gap-2 mt-3">
                <button className="relative group w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                    <p className="px-4 text-primary">Stage</p>
                    <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
                    <div className="z-10 absolute hidden group-focus:block top-full -right-1 h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded">
                        <ul className="text-left flex flex-col bg-white text-primary">
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 1</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 2</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 3</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 4</li>
                            <li className="px-4 py-2 border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 5</li>
                        </ul>
                    </div>
                </button>

                <button className="relative group w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                    <p className="px-4 text-primary">Categories</p>
                    <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
                    <div className="z-10 absolute hidden group-focus:block top-full -right-1 h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded">
                        <ul className="text-left flex flex-col bg-white text-primary">
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 1</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 2</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 3</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 4</li>
                            <li className="px-4 py-2 border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 5</li>
                        </ul>
                    </div>
                </button>

                <button className="relative group w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                    <p className="px-4 text-primary">Department</p>
                    <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
                    <div className="z-10 absolute hidden group-focus:block top-full -right-1 h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded">
                        <ul className="text-left flex flex-col bg-white text-primary">
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 1</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 2</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 3</li>
                            <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 4</li>
                            <li className="px-4 py-2 border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 5</li>
                        </ul>
                    </div>
                </button>
            </div> */}

                <div className="flex gap-2 mt-3 mx-16 w-full px-16">
                    <Link
                        href={'/dashboard'}
                        onClick={handleClearFilter}
                        className="relative text-primary group w-full bg-white flex justify-center items-center hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                    >
                        Clear Filter
                    </Link>

                    <button className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                        Filter
                    </button>
                </div>
            </form>
        </div >
    )
}
