import Balancer from "react-wrap-balancer";
import Image from "next/image";
import services from "@/app/Utils/services";

export default function Services() {
    return (
        <div className="bg-[#0C0838] py-16 x-container flex flex-col gap-10" id="services">
            <h2 className="2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-2xl text-2xl text-white text-center 2xl:text-left lg:text-center md:text-center sm:text-center">
                <Balancer>
                    We provide a
                    comprehensive <span className='hero-gradient'>
                        bidding opportunity
                    </span> platform to help our clients with
                </Balancer>
            </h2>
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 gap-x-10 py-4">
                {
                    services.map((service) => (
                        <div key={service.id} className="2xl:py-10 py-5 sm:py-5 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center 2xl:px-5 xl:px-5 lg:px-5 md:px-3 sm:px-2 px-2">
                            <div className="flex gap-3 items-center">
                                <Image
                                    src={service.src}
                                    alt={service.alt}
                                />
                                <h2
                                    className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl sm:text-xl text-xl">
                                    {service.text}
                                </h2>
                            </div>
                            <div>
                                {
                                    service.icon
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
