"use client"
import { useState } from 'react'
import dynamic from 'next/dynamic'


const Navbar = dynamic(() => import('../components/Navbar'))
const ViewProfile = dynamic(() => import('../components/SettingsPage/ViewProfile'))
const AddProfile = dynamic(() => import('../components/SettingsPage/AddProfile'))
const Payments = dynamic(() => import('../components/SettingsPage/Payments'))
const AssignProjects = dynamic(() => import('../components/SettingsPage/AssignProjects'))


export default function SettingsPage() {
    const [selectedSetting, setSelectedSetting] = useState('View Profiles')

    return (
        <div className="col-span-10">
            <Navbar />
            <div className='pt-5 px-10 py-5 text-lg font-medium'>
                <h2>Users Profiles Settings</h2>
            </div>
            <div className='grid grid-cols-8 px-10 py-5 gap-2 '>
                <div className='col-span-2 p-8 flex flex-col gap-3 bg-white rounded-xl shadow-lg'>
                    <div>
                        <p className='text-mute text-sm '>Settings / <span className='text-secondary'>{selectedSetting}</span></p>
                    </div>
                    <div className='flex gap-4'>
                        <ul className='flex flex-col '>
                            <li
                                onClick={() => setSelectedSetting('View Profiles')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'View Profiles' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                View Profiles
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Add Profile')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Add Profile' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Add Profile
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Assign Projects')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Assign Projects' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Assign Projects
                            </li>
                            <li
                                onClick={() => setSelectedSetting('Payments')}
                                className={`text-lg text-mute flex gap-4 ${selectedSetting === 'Payments' ? "text-secondary" : ''} hover:text-secondary duration-200 cursor-pointer`}>
                                Payments
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-6'>
                    {selectedSetting === 'View Profiles' && <ViewProfile />}
                    {selectedSetting === 'Add Profile' && <AddProfile />}
                    {selectedSetting === 'Assign Projects' && <AssignProjects />}
                    {selectedSetting === 'Payments' && <Payments />}
                </div>
            </div>
        </div >
    )
}