import Image from "next/image";
import img from "../../../public/testimonials/IMG_6178.jpg";
import testimonials from "../../Utils/Testimonials";
import Carousel from "../Carousel/Carousel";


export default function Testimonials() {
    return (
        <div className='bg-[#0C0838] py-7 x-container' id="testimonials">
            <h2 className='text-primary text-3xl'>Success Stories</h2>
            <p className='text-white text-lg text-opacity-90 mt-4'>{`Checkout some of Bidstruct's success stories from our beloved users`}</p>
            <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
                <div className='border-stone-200 border-2 border-opacity-30 p-5 mt-4 3xl:col-span-2 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 col-span-3 flex flex-col justify-center gap-5 w-full'>
                    <Carousel
                        images={testimonials}
                        autoSlideIntervel={5}
                    />
                </div>
                <div className='border-stone-200 border-y-2 border-r-2 border-opacity-30 p-4 text-white mt-0 3xl:mt-4 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-0 3xl:border-r-2 2xl:border-r-2 xl:border-r-2 lg:border-r-2 md:border-x-2 border-x-2 md:border-y-2'>
                    <Image
                        src={img}
                        alt="dashboard-img"
                        height={'auto'}
                        width={'auto'}
                        className="md:w-80 md:h-72 mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}
