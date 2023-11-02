import dynamic from 'next/dynamic'
import Balancer from 'react-wrap-balancer'

const Button = dynamic(() => import("../clientComponents/Button"))

export default function PowerfullTools() {
    return (
        <div>
            <div className='bg-white py-12 x-container'>
                <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-3xl text-3xl py-10'>Powerful tools help you <span className='hero-gradient font-medium'>
                    find work faster.
                </span>
                </h2>
                <div className='grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1'>
                    <div className='border-stone-200 border-y-2 border-l-2 border-opacity-30 3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                        <h2 className='text-7xl font-medium'><span className='hero-gradient'>01</span></h2>
                        <h3 className='text-3xl'>Bid Alerts</h3>
                        <p className='text-xl'>
                            <Balancer>
                                {`Don't search — let the leads come to you. Set up custom saved searches based on your own criteria and receive email alerts with the latest results and updates. You'll always be up-to-date on project developments, even when you're on the road.`}
                            </Balancer>
                        </p>
                    </div>
                    <div className='border-stone-200 border-y-2 border-x-2 border-opacity-30 3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                        <h2 className='text-7xl font-medium'><span className='hero-gradient'>02</span></h2>
                        <h3 className='text-3xl'>Powerful Search</h3>
                        <p className='text-xl'>
                            <Balancer>
                                {`With the most complete collection of information on available projects, companies, and contacts in the industry, you'll be able to find the your ideal matches instantly.`}
                            </Balancer>
                        </p>
                    </div>
                    <div className='border-stone-200 border-y-2 border-r-2 border-opacity-30 3xl:p-10 2xl:p-10 xl:p-10 lg:p-10 p-5 flex flex-col gap-8'>
                        <h2 className='text-7xl font-medium'><span className='hero-gradient'>03</span></h2>
                        <h3 className='text-3xl'>Analytics & Forecasting</h3>
                        <p className='text-xl'>
                            <Balancer>
                                {`With built-in analytics tools, you'll be able to spot opportunity within your niche of the construction market. Plot recent trends for any metric, forecast upcoming potential leads, and find your next job site with advanced geographic mapping tools.`}
                            </Balancer>
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-primary py-12 x-container grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 grid-cols-1 place-content-center gap-2'>
                <div className='flex gap-3 flex-col col-span-2'>
                    <h2 className='text-white 2xl:text-3xl  xl:text-3xl  lg:text-3xl sm:text-2xl text-2xl font-semibold'>
                        <Balancer>
                            {`"Don't make the process harder than it is."`}
                        </Balancer>
                    </h2>
                    <p className='text-white text-xl'>
                        <Balancer>
                            Jack Welch, American business executive
                        </Balancer>
                    </p>
                </div>
                <div>
                    <div>
                        <Button text={'Get Started'} type={"signup"} classList={'hover:text-secondary bg-white'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
