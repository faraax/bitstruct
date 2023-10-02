import Image from 'next/image'
import { cards } from '../../Utils/IndustriesCards'




export default function Industries() {
    return (
        <div className='bg-[#FAFCFF] py-7 x-container flex flex-col gap-5' id='industries'>
            <div className='my-5'>
                <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-2xl text-2xl'>Industries that benefit from BidStruct</h2>
            </div>
            <div className='grid 3xl:grid-cols-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 gap-5'>
                {
                    cards.map((item) => (
                        <div key={item.id} className='flex flex-col gap-4 items-center'>
                            <div className='industries-card relative object-contain aspect-video'>
                                <Image
                                    src={item.src}
                                    className='absolute inset-0 m-0 h-full w-full overflow-hidden'
                                    alt={item.category}
                                />
                            </div>
                            <div className='flex gap-4 justify-center items-center'>
                                <p className='text-lg'>{item.category}</p>
                                {item.icon}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
