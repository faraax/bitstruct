import { BsArrowRightCircle } from '../../Utils/icons'
import Balancer from 'react-wrap-balancer'

export default function HeroSec() {
    return (
        <div className='min-h-screen py-7 px-28 flex flex-col gap-5'>
            <h1 className='text-7xl mt-28 tracking-widest font-semibold'>
                <Balancer>
                    <span className='hero-gradient'>
                        Better Data,
                    </span>
                    <br />
                    <span className='hero-gradient'>
                        Better Results
                    </span>
                </Balancer>
            </h1>
            <p className='text-white text-left text-lg w-1/2 font-medium text-opacity-90'>
                <Balancer>
                    Access to the projects that matter to you. BidStruct is streamlined for effortless registration, easy access to bid opportunities, and optimal business exposure. BidStruct is designed to connect vendors and contractors to <span className='hero-gradient'> government bid opportunities.</span> This powerful tool streamlines the registration process and provides an efficient method to maintain all of your individual agency profiles.
                </Balancer>
            </p>
            <div>
                <button className='capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 bg-white rounded-full px-5 py-2 hover:text-secondary hover:font-bold'>
                    Scrape Data Now
                    <BsArrowRightCircle />
                </button>
            </div>
        </div>
    )
}
