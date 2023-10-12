import Balancer from 'react-wrap-balancer'
import Button from '../clientComponents/Button'

export default function HeroSec() {
    return (
        <div className='min-h-screen grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 py-7 x-container gap-5'>
            <div>
                <h1 className='3xl:text-7xl 2xl:text-7xl xl:text-6xl sm:text-5xl xs:text-4xl text-6xl mt-20 tracking-widest font-semibold'>
                    <Balancer>
                        <span className='bg-gradient-to-l to-primary from-secondary bg-clip-text text-transparent'>
                            Better Data,
                        </span>
                    </Balancer>
                </h1>
                <h1 className='3xl:text-7xl 2xl:text-7xl xl:text-6xl sm:text-5xl xs:text-4xl text-6xl tracking-widest font-semibold'>
                    <Balancer>
                        <span className='bg-gradient-to-l to-primary from-secondary bg-clip-text text-transparent'>
                            Better Results
                        </span>
                    </Balancer>
                </h1>
                <p className='text-white text-left text-2xl sm:text-lg xs:text-base font-medium text-opacity-90 py-3'>
                    <Balancer>
                        Access to the projects that matter to you. BidStruct is streamlined for effortless registration, easy access to bid opportunities, and optimal business exposure. BidStruct is designed to connect vendors and contractors to <span className='bg-gradient-to-l to-primary from-secondary bg-clip-text text-transparent font-bold'> government bid opportunities.</span>
                    </Balancer>
                </p>
                <div>
                    <Button text={'Want to get started?'} type={"signup"} classList={'hover:text-secondary bg-white'} />
                </div>
            </div>
            <div className="bg-[url('/hero-img-2.png')] bg-local bg-no-repeat bg-center bg-contain hidden 3xl:flex 2xl:flex xl:flex lg:flex md:hidden">
            </div>
        </div>
    )
}
