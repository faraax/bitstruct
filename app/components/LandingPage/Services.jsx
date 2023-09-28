import Balancer from "react-wrap-balancer";
import Image from "next/image";
import services from "@/app/Utils/services";

export default function Services() {
    return (
        <div className="bg-[#0C0838] py-16 px-28 flex flex-col gap-10" id="services">
            <h2 className="text-4xl text-white">
                <Balancer>
                    We provide a
                    comprehensive <span className='hero-gradient'>
                        bidding opportunity
                    </span> platform to help our clients with
                </Balancer>
            </h2>
            <div className="grid grid-cols-2 gap-x-10 py-4">
                {
                    services.map((service) => (
                        <div key={service.id} className="py-10 border-stone-200 border-y-[0.1px] text-3xl flex justify-between items-center px-5">
                            <div className="flex gap-3 items-center">
                                <Image
                                    src={service.src}
                                    alt={service.alt}
                                />
                                <h2 className="text-white text-2xl">{service.text}</h2>
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
