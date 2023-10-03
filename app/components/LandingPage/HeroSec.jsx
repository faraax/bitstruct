import Balancer from 'react-wrap-balancer'
import Button from '../clientComponents/Button'

export default function HeroSec() {
    return (
        <div className='min-h-screen grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 py-7 x-container gap-5'>
            <div>
                <h1 className='3xl:text-7xl 2xl:text-7xl xl:text-6xl sm:text-5xl xs:text-4xl text-6xl mt-16 tracking-widest font-semibold'>
                    <Balancer>
                        <span className='hero-gradient'>
                            Better Data,
                        </span>
                    </Balancer>
                </h1>
                <h1 className='3xl:text-7xl 2xl:text-7xl xl:text-6xl sm:text-5xl xs:text-4xl text-6xl tracking-widest font-semibold'>
                    <Balancer>
                        <span className='hero-gradient'>
                            Better Results
                        </span>
                    </Balancer>
                </h1>
                <p className='text-white text-left text-xl sm:text-lg xs:text-base font-medium text-opacity-90 py-3'>
                    <Balancer>
                        Access to the projects that matter to you. BidStruct is streamlined for effortless registration, easy access to bid opportunities, and optimal business exposure. BidStruct is designed to connect vendors and contractors to <span className='hero-gradient'> government bid opportunities.</span> This powerful tool streamlines the registration process and provides an efficient method to maintain all of your individual agency profiles.
                    </Balancer>
                </p>
                <div>
                    <Button text={'Scrape Data Now'} type={"signup"} classList={'hover:text-secondary bg-white'} />
                </div>
            </div>
        </div>
    )
}
