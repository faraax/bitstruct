import { currentDate, currentDay, currentMonth, currentYear } from '../Utils/dateFormat'
import { BiSearchAlt2, BsBell, FaHeadphones } from '../Utils/icons'


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between h-24">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-medium">Welcome Alex</h2>
                <p className="text-mute text-base">
                    {`${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`}
                </p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className='relative'>
                    <input
                        type="text"
                        className='border border-mute border-opacity-20 px-10 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:placeholder:text-primary peer'
                        placeholder='Search'
                    />
                    <BiSearchAlt2
                        className='text-mute text-2xl absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 peer-focus:text-primary'
                    />
                </div>
                <div className='bg-white flex justify-center items-center rounded-lg border border-mute border-opacity-20 text-primary text-xl p-3'>
                    <button>
                        <BsBell />
                    </button>
                </div>
                <div className='bg-white flex justify-center items-center rounded-lg border border-mute border-opacity-20 text-primary text-xl p-3'>
                    <button>
                        <FaHeadphones />
                    </button>
                </div>
            </div>
        </nav>
    )
}
