import Balancer from "react-wrap-balancer";
import { BsArrowRightCircle } from "../../Utils/icons";
import BenefitsCarousel from "../Carousel/BenefitsCarousel";
import keyBenefits from "../../Utils/keyBenefits"
import Button from "../clientComponents/Button";



export default function KeyBenefits() {
    return (
        <div className="bg-white py-24 px-28">
            <div className="grid grid-cols-7">
                <div className="col-span-3 flex flex-col justify-between h-96">
                    <h2 className="text-7xl"><Balancer> Key benefits of <span className="hero-gradient"> BidStruct</span></Balancer></h2>
                    <Button text={'Hurry up and join us'} type={"signup"} classList={'hover:text-secondary bg-white w-1/2 border-stone-400 border-2'} />
                </div>
                <div className="col-span-4 flex flex-col justify-between h-96">
                    <BenefitsCarousel array={keyBenefits} />
                </div>
            </div>
        </div>
    )
}
