
export default function RelatedServices() {
    return (
        <div className="bg-[#0C0838]">
            <div className="justify-between items-center grid grid-cols-2 border-stone-200 border-b-2 border-opacity-30 py-24 px-28">
                <h2 className="text-4xl text-primary">How it works</h2>
                <p className="text-xl text-white">BidStruct offers a robust search function that includes the ability to filter through hundreds of bids within the BidStruct System that match your specified search criteria. Effortlessly locate bids and bid ads within your scope of business, and easily add important projects to your watchlist for quick access and retrieval.</p>
            </div>
            <div className="grid grid-cols-2 py-10 px-28 text-white">
                <div className='p-10 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>01</span></h2>
                    <h3 className='text-3xl'>Registration</h3>
                    <p className='text-xl'>
                        Registering with BidStruct is incredibly fast and easy. You’ll be searching for bid opportunities and receiving bid notifications in no time!
                    </p>
                </div>
                <div className='p-10 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>02</span></h2>
                    <h3 className='text-3xl'>Bid Opportunities</h3>
                    <p className='text-xl'>
                        Search through hundreds of BidStruct's bids and bid ads. You’ll also receive email notifications of bid opportunities based on your notification criteria.
                    </p>
                </div>
                <div className='p-10 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>03</span></h2>
                    <h3 className='text-3xl'>Account Management</h3>
                    <p className='text-xl'>
                        Managing all of your individual agency profiles has never been simpler! BidStruct streamlines the registration and profile maintenance process.
                    </p>
                </div>
                <div className='p-10 flex flex-col gap-8'>
                    <h2 className='text-7xl font-medium'><span className='hero-gradient'>04</span></h2>
                    <h3 className='text-3xl'>Bid Participation</h3>
                    <p className='text-xl'>
                        Participating in a bid is just one click away! Each bid opportunity includes a link that will take you directly to the bid within the agency’s vendor portal.
                    </p>
                </div>
            </div>
        </div>
    )
}
