import Image from 'next/image'
import { cards } from '../../Utils/IndustriesCards'




export default function Industries() {
    return (
        <div className='bg-[#FAFCFF] py-7 px-28 flex flex-col gap-5'>
            <div className='my-5'>
                <h2 className='text-4xl'>Industries that benefit from BidStruct</h2>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    cards.map((item) => (
                        <div key={item.id} className='flex flex-col gap-4 items-center'>
                            <div className='relative w-[350px] h-[200px] object-contain aspect-video'>
                                <Image
                                    src={item.src}
                                    // width={500}
                                    // height={200}
                                    className='absolute inset-0 m-0 h-full w-full overflow-hidden'
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
