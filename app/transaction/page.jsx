import Image from "next/image";
import dynamic from "next/dynamic";
import { HiDotsHorizontal } from "../Utils/icons";
import basharAllan from "../../public/testimonials/Bashar Allan.jpg";
import ghassanKhoulaghasi from "../../public/testimonials/Ghassan Khoulaghasi.jpg";


const Navbar = dynamic(() => import("../components/Navbar"))

export default function Transaction() {
    return (
        <div className="col-span-10">
            <Navbar />
            <div className="px-10 py-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-4xl">Today</h2>
                    <h2 className="text-mute text-4xl">Tommorow</h2>
                </div>
            </div>

            <div className="grid grid-cols-3 px-10 gap-7">

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">New Awarded</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-blue-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-orange-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">In Progress</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-orange-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-purple-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">Complete</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-purple-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full">
                        <h2 className="text-xl">Downloads</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" />
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-blue-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full mt-7">
                        {/* <h2 className="text-xl">In Progress</h2> */}
                        {/* <HiDotsHorizontal className=" ml-auto mr-20 text-mute text-2xl" /> */}
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-orange-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <div className="flex items-center w-full mt-7">
                        {/* <h2 className="text-xl">Complete</h2>
                        <HiDotsHorizontal className="ml-auto mr-20 text-mute text-2xl" /> */}
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-5 flex flex-col gap-3">
                        <span className="bg-purple-300 w-full h-2 rounded-xl" />
                        <h3 className="text-2xl">Date of Infographic</h3>
                        <p className="text-mute text-xl">July 14</p>
                        <div className="flex gap-2">
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={basharAllan}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                            <Image
                                height={'auto'}
                                width={'auto'}
                                src={ghassanKhoulaghasi}
                                className='rounded-full object-cover aspect-square w-12 h-12'
                                alt='review'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
