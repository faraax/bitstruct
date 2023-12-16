"use client"
import dynamic from 'next/dynamic'
import { CgProfile } from 'react-icons/cg'
import { useAuthContext } from '../hooks/useAuthContext'
import { currentDate, currentDay, currentMonth, currentYear } from '../Utils/dateFormat'

const Username = dynamic(() => import('./clientComponents/Username'))
const UserList = dynamic(() => import('./clientComponents/UserList'))


export default function Navbar() {
    const { profiles, dispatch } = useAuthContext()
    return (
        <nav className="flex items-center justify-between h-24 sticky top-0 bg-[#FAFCFF] z-10 w-full px-10 py-5">
            <div className="flex flex-col gap-2">
                <Username notes={"Welcome "} />
                <p className="text-mute text-base">
                    {`${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`}
                </p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                {/* <div className='relative'>
                    <input
                        type="text"
                        className='border border-mute border-opacity-20 px-10 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:placeholder:text-primary peer'
                        placeholder='Search'
                    />
                    <BiSearchAlt2 className='text-mute text-2xl absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 peer-focus:text-primary' />
                </div> */}
                {/* <div className='bg-white flex justify-center items-center rounded-lg border border-mute border-opacity-20 text-primary text-xl p-3'>
                    <button>
                        <BsBell />
                    </button>
                </div> */}
                <button className='bg-white hover:bg-white/80 hover:border-primary group flex justify-center items-center rounded-lg border border-mute border-opacity-20 text-primary/70 hover:text-primary text-lg p-3 gap-4'>
                    <h2 className='text-mute'>Profiles</h2>
                    <div className='relative' title='Select Profile'>
                        <CgProfile className='text-3xl' />
                        <div className="z-10 absolute hidden group-focus:block top-full -right-1 max-h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded">
                            <ul className="text-left flex flex-col bg-white text-primary">
                                {profiles && <UserList profiles={profiles} dispatch={dispatch} />}
                            </ul>
                        </div>
                    </div>
                </button>
            </div>
        </nav>
    )
}
