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
                <div className='3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>01</span></h2>
                    <h3 className='text-3xl'>Registration</h3>
                    <p className='text-xl'>
                        <Balancer>
                            Registering with BidStruct is incredibly fast and easy. You’ll be searching for bid opportunities and receiving bid notifications in no time!
                        </Balancer>
                    </p>
                </div>
                <div className='3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>02</span></h2>
                    <h3 className='text-3xl'>Bid Opportunities</h3>
                    <p className='text-xl'>
                        <Balancer>
                            Search through hundreds of BidStruct's bids and bid ads. You’ll also receive email notifications of bid opportunities based on your notification criteria.
                        </Balancer>
                    </p>
                </div>
                <div className='3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>03</span></h2>
                    <h3 className='text-3xl'>Account Management</h3>
                    <p className='text-xl'>
                        <Balancer>
                            Managing all of your individual agency profiles has never been simpler! BidStruct streamlines the registration and profile maintenance process.
                        </Balancer>
                    </p>
                </div>
                <div className='3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>04</span></h2>
                    <h3 className='text-3xl'>Bid Participation</h3>
                    <p className='text-xl'>
                        <Balancer>
                            Participating in a bid is just one click away! Each bid opportunity includes a link that will take you directly to the bid within the agency’s vendor portal.
                        </Balancer>
                    </p>
                </div>
            </div>
        </div >
    )
}
