import BidsFilter from "../components/BidsFilter"
import Cards from "../components/Cards"
import Navbar from "../components/Navbar"
import { RiLayout2Fill, BsFillBuildingsFill, IoPerson, RiSettings4Fill, BsCloudDownloadFill, HiDotsHorizontal } from "../Utils/icons"

export const metadata = {
    title: 'Dashboard - Bit Struct',
    description: 'Generated by create next app',
}

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

async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        return res.json()
    } catch (err) {
        throw new Error(err)
    }
}

export default async function page() {
    const data = await getData()
    return (
        <div className="w-full">
            <Navbar />
            <div className="px-10 py-5">

                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-4">
                        <h2 className="text-lg font-medium mb-3">Dashboard</h2>
                        <div className="grid grid-cols-3 gap-7">
                            {
                                dashboardCards.map((cardsData) => (
                                    <div key={cardsData.id} className="flex flex-col p-5 gap-1 border border-mute border-opacity-20 rounded-lg bg-white col-span-1">
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
                    <div>
                        <table className="table w-full -z-0 my-3">
                            <thead className="sticky top-24 z-40 bg-[#FAFCFF] border-b border-mute border-opacity-20">
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <th className="font-normal py-3">Project Titles</th>
                                    <th className="font-normal">Vendors</th>
                                    <th className="font-normal">Due Date</th>
                                    <th className="font-normal">Remaining</th>
                                    <th className="font-normal">Stage</th>
                                    <th className="font-normal">Format</th>
                                    <th className="font-normal">District Areas</th>
                                    <th className="font-normal text-primary ">
                                        <RiSettings4Fill className="text-2xl text-right" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((list) => (
                                        <tr key={list.id} className="text-mute text-left border-b border-mute border-opacity-20">
                                            <td className="py-3">
                                                <span className="text-sm">Invitation# {list.address.zipcode}</span>
                                                <h2 className="text-black">{list.name}</h2>
                                            </td>
                                            <td className="py-3">
                                                <h2 className="text-black">{list.name}</h2>
                                            </td>
                                            <td className="py-3">
                                                <h2 className="text-sm">{list.name}</h2>
                                                <span className="text-sm">03:21 PM</span>
                                            </td>
                                            <td className="py-3">
                                                <h2 className="text-sm">{list.website}</h2>
                                            </td>
                                            <td className="py-3">
                                                <button
                                                    // className="text-sm bg-primary text-white px-5 py-2 rounded-xl">
                                                    className="text-white text-sm bg-primary hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                                                >
                                                    Awarded
                                                </button>
                                            </td>
                                            <td className="py-3">
                                                <h2 className="text-sm">{list.company.name.slice(0, 5)}</h2>
                                            </td>
                                            <td className="py-3">
                                                <h2 className="text-sm">{list.company.bs.slice(0, 5)} ...</h2>
                                            </td>
                                            <td className="py-3 flex justify-between">
                                                <h2 className="text-sm">
                                                    <BsCloudDownloadFill className="text-2xl text-secondary" />
                                                </h2>
                                                <div>
                                                    <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {/* <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3">
                                        <span className="text-sm">Invitation# SCP12345</span>
                                        <h2 className="text-black">Texas Leather Services</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-black">Timoty</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm bg-primary text-white w-1/2 px-5 py-2 rounded-xl">Awarded</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3">
                                        <h2 className="text-sm">Abracadabra Group</h2>
                                    </td>
                                    <td className="py-3 flex justify-between">
                                        <h2 className="text-sm">
                                            <BsCloudDownloadFill className="text-2xl text-secondary" />
                                        </h2>
                                        <div>
                                            <HiDotsHorizontal className="text-2xl flex justify-center items-center hover:text-primary cursor-pointer" />
                                        </div>
                                    </td>
                                </tr> */}
                            </tbody >
                        </table >
                    </div>
                </div>

            </div>
        </div>
    )
}
