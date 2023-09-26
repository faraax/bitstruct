import Balancer from "react-wrap-balancer";
import { BsArrowDownCircle, MdOutlineAnalytics } from "../Utils/icons";

export default function Services() {
    return (
        <div className="bg-[#0C0838] py-16 px-28 flex flex-col gap-10">
            <h2 className="text-4xl text-white">
                <Balancer>
                    We provide a
                    comprehensive <span className='hero-gradient'>
                        bidding opportunity
                    </span> platform to help our clients with
                </Balancer>
            </h2>
            <div className="grid grid-cols-2 gap-x-10 py-4">
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Bid Opportunities</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Business Growth</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Maximizing Efficiency</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Central Bids Management</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Subcontracting Opportunities</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Local Bids and RFPs</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Bid Participation</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
                <div className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAnalytics className='text-5xl text-white' />
                        <h2 className="text-white text-2xl">Government Contracts</h2>
                    </div>
                    <div>
                        <BsArrowDownCircle className="text-white text-4xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
