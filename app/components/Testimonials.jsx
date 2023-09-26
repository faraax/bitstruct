import Image from "next/image";
import img from "../../public/testimonials/IMG_6178.WEBP";
import basharAllan from "../../public/testimonials/Bashar Allan.jpg";
import Balancer from "react-wrap-balancer";
import { VscQuote } from "../Utils/icons";

export default function Testimonials() {
    return (
        <div className='bg-[#0C0838] py-7 px-28 '>
            <h2 className='text-primary text-3xl'>Success Stories</h2>
            <p className='text-white text-lg text-opacity-90 mt-4'>Checkoout some of Bidstruct's success stories from our beloved users</p>
            <div className="grid grid-cols-3">
                <div className='border-stone-200 border-2 border-opacity-30 p-5 mt-4 col-span-2 flex flex-col justify-center gap-5'>
                    
                </div>


                <div className='border-stone-200 border-y-2 border-r-2 border-opacity-30 p-4 text-white mt-4'>
                    <Image
                        src={img}
                    />
                </div>
            </div>
        </div>
    )
}
