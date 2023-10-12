import Balancer from "react-wrap-balancer";
import BenefitsCarousel from "../Carousel/BenefitsCarousel";
import keyBenefits from "../../Utils/keyBenefits"
import Button from "../clientComponents/Button";



export default function KeyBenefits() {
    return (
        <div className="bg-white py-24 x-container">
            <div className="grid gap-3 3xl:grid-cols-7 2xl:grid-cols-7 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1">
                <div className="col-span-3 flex flex-col 3xl:justify-between 2xl:justify-between xl:justify-between lg:justify-between md:justify-center justify-center 3xl:h-96 2xl:h-96 xl:h-96 lg:h-96 md:h-full sm:h-full h-full gap-4">
                    <h2 className="3xl:text-7xl 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl text-3xl 3xl:text-left 2xl:text-left xl:text-left lg:text-left md:text-center text-center">
                        <Balancer>
                            Key benefits of <span className="hero-gradient"> BidStruct</span>
                        </Balancer>
                    </h2>
                    <Button text={'Get Started With A Free Trial'} type={"signup"} classList={'hover:text-secondary bg-white w-1/2 border-stone-400 border-2 3xl:flex 2xl:flex xl:flex lg:flex md:hidden xs:hidden'} />
                </div>
                <div className="col-span-4 flex flex-col 3xl:justify-between 2xl:justify-between xl:justify-between lg:justify-between md:justify-center justify-center 3xl:items-start 2xl:items-start xl:items-start lg:items-start md:items-center items-center 3xl:h-96 2xl:h-96 xl:h-96 lg:h-96 md:h-full sm:h-full h-full">
                    <BenefitsCarousel array={keyBenefits} />
                </div>
            </div>
        </div>
    )
}
