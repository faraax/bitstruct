"use client"
import { useEffect, useState } from "react"
import { MdOutlineKeyboardArrowDown } from "../Utils/icons"
import { useAuthContext } from "../hooks/useAuthContext"
import axios from "axios"
import Cookies from "js-cookie"

export default function BidsFilter({ setPortalid, portalid }) {
    const { selectedProfile } = useAuthContext()
    const [portalList, setPortalList] = useState(null)
    const [list, setList] = useState(false)

    useEffect(() => {
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
                let { data } = await axios.request(reqOptions);
                setPortalList(data)
                // console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        if (selectedProfile) {
            getProfilePortalList()
        }
    }, [selectedProfile])

    const handlePortalId = (portalId) => {
        setPortalid(portalId);
    }

    return (
        <>
            <h2 className="text-lg font-medium mb-3">Filter Bids</h2>
            <div className="flex gap-2">
                <button
                    onClick={() => setList(!list)}
                    className="relative w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                >
                    <p className="px-4 text-primary">{portalid ? portalid.portalId + '-' + portalid.portalName.substring(0, 35) : 'Portal Id'}</p>
                    <MdOutlineKeyboardArrowDown className="text-xl text-primary" />
                    <div className={`z-30 absolute ${list ? "block" : "hidden"} top-full -right-1 max-h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded`}>
                        <ul className="text-left flex flex-col bg-white text-primary">
                            {
                                portalList?.map((list) => (
                                    list.projectName.map((list) => (
                                        <li
                                            key={list.portalId}
                                            onClick={() => handlePortalId(list)}
                                            className={`px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary/20  ${portalid?.portalId === list.portalId && 'bg-primary/20'}`}
                                        >
                                            {list.portalId} -
                                            {list.portalName}
                                        </li>
                                    ))
                                ))
                            }
                        </ul>
                    </div>
                </button>
            </div>
            <div className="flex gap-2 mt-3">
                <input type="date"
                    className="placeholder:text-primary text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl w-1/2"
                    placeholder="Keyword Search" />
                <span className="text-center">
                    <p>-</p>
                </span>
                <input type="date"
                    className="placeholder:text-primary text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl w-1/2"
                    placeholder="Keyword Search"
                />
            </div>
            <div className="flex gap-2 mt-3">
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
            </div>
            <div className="flex gap-2 mt-3 mx-16">
                <button className="relative text-primary group w-full bg-white flex justify-center items-center hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                    Clear Search
                </button>

                <button className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                    Search
                </button>
            </div>
        </>
    )
}
