import Balancer from "react-wrap-balancer";
import { BsArrowRightCircle } from "../../Utils/icons";
import BenefitsCarousel from "../Carousel/BenefitsCarousel";
import keyBenefits from "../../Utils/keyBenefits"



export default function KeyBenefits() {
    return (
        <div className="bg-white py-24 px-28">
            <div className="grid grid-cols-7">
                <div className="col-span-3 flex flex-col justify-between h-96">
                    <h2 className="text-7xl"><Balancer> Key benefits of <span className="hero-gradient"> BidStruct</span></Balancer></h2>
                    <button className='w-1/2 border-stone-400 border-2 capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 bg-white rounded-full px-5 py-2 hover:text-secondary hover:font-bold'>
                        Hurry up and join us
                        <BsArrowRightCircle />
                    </button>
                </div>
                <div className="col-span-4 flex flex-col justify-between h-96">
                    <BenefitsCarousel array={keyBenefits} />
                </div>
            </div>
        </div>
    )
}
