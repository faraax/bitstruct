import relatedServices from "@/app/Utils/relatedServices";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function RelatedServices() {
    return (
        <div className="bg-[#0C0838]">
            <div className="justify-between items-center grid 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 border-stone-200 border-b-2 border-opacity-30 py-24 x-container gap-3">
                <h2 className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl text-primary">How it works</h2>
                <p className="text-xl text-white">
                    <Balancer>
                        BidStruct offers a robust search function that includes the ability to filter through hundreds of bids within the BidStruct System that match your specified search criteria. Effortlessly locate bids and bid ads within your scope of business, and easily add important projects to your watchlist for quick access and retrieval.
                    </Balancer>
                </p>
            </div>
            <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 py-10 x-container text-white">
                {
                    relatedServices.map((service) => (
                        <div key={service.id} className='3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                            <Image
                                src={service.imageSrc}
                                alt={service.altText}
                                height={100}
                                width={100}
                            />
                            <h3 className='text-3xl'>{service.title}</h3>
                            <p className='text-xl'>
                                <Balancer>
                                    {service.description}
                                </Balancer>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
