import Balancer from 'react-wrap-balancer'
import { BsArrowRightCircle } from '../../Utils/icons'

export default function PowerfullTools() {
    return (
        <div>
            <div className='bg-primary py-12 px-28 grid grid-cols-3 place-content-center'>
                <div className='flex gap-3 flex-col col-span-2'>
                    <h2 className='text-white text-3xl font-semibold'>"Don't make the process harder than it is."</h2>
                    <p className='text-white text-xl'>Jack Welch, American business executive</p>
                </div>
                <div>
                    <div>
                        <button className='capitalize flex gap-2 justify-center items-center duration-150 hover:gap-3 bg-white rounded-full px-5 py-3 hover:text-secondary'>
                            Simplify data acquisition
                            <BsArrowRightCircle />
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-white py-12 px-28'>
                <h2 className='text-4xl py-10'>Powerful tools help you <span className='hero-gradient'>
                    find work faster.
                </span>
                </h2>
                <div className='grid grid-cols-3'>
                    <div className='border-stone-200 border-y-2 border-l-2 border-opacity-30 p-10 flex flex-col gap-8'>
                        <h2 className='text-7xl font-medium'><span className='hero-gradient'>01</span></h2>
                        <h3 className='text-3xl'>BidAlerts</h3>
                        <p className='text-xl'>
                            <Balancer>
                                Don't search — let the leads come to you. Set up custom saved searches based on your own criteria and receive email alerts with the latest results and updates. You'll always be up-to-date on project developments, even when you're on the road.
                            </Balancer>
                        </p>
                    </div>
                    <div className='border-stone-200 border-y-2 border-x-2 border-opacity-30 p-10 flex flex-col gap-8'>
                        <h2 className='text-7xl font-medium'><span className='hero-gradient'>02</span></h2>
                        <h3 className='text-3xl'>Powerful Search</h3>
                        <p className='text-xl'>
                            <Balancer>
                                With the most complete collection of information on available projects, companies and contacts in the industry, our advanced search criteria allows you to find the exact projects, companies or contacts that match your ideal criteria instantly.
                            </Balancer>
                        </p>
                    </div>
                    <div className='border-stone-200 border-y-2 border-r-2 border-opacity-30 p-10 flex flex-col gap-8'>
                        <h2 className='text-7xl font-medium'><span className='hero-gradient'>03</span></h2>
                        <h3 className='text-3xl'>Analytics & Forecasting</h3>
                        <p className='text-xl'>
                            <Balancer>
                                With built-in analytics tools, instantly spot opportunity within your niche of the construction market. Plot recent trends for any metric, forecast upcoming potential leads, and find your next job site with advanced geographic mapping tools.
                            </Balancer>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
