import React from 'react'
import dynamic from 'next/dynamic'
import { BsCloudDownloadFill, SlDoc } from '../Utils/icons'


const Navbar = dynamic(() => import("../components/Navbar"))

export default function Activity() {
    return (
        <div className="col-span-10">
            <Navbar />
            <div className='pt-5 px-10 py-5 text-lg font-medium'>
                <h2>Bid View</h2>
            </div>
            <div className='px-10 py-5'>
                <div className='bg-white rounded-xl gap-5 px-10 py-3 flex flex-col justify-center shadow-sm'>
                    <div className='w-full bg-primary h-1 mt-4' />
                    <div className='flex justify-between'>
                        <div>
                            <h2>Timoty</h2>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='text-mute flex gap-3 items-center'>
                                Downloaded
                                <BsCloudDownloadFill className="text-mute text-2xl text-right text-opacity-80" />
                            </p>
                            <button className="text-sm bg-primary text-white w-1/2 px-3 py-1 rounded-lg">
                                Awarded
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='border-b border-mute border-opacity-20 pb-3'>
                            <span className="text-sm text-mute">Project Title | Invitation# SCP12345</span>
                            <div className='flex justify-between'>
                                <h2 className="text-black">Texas Leather Services</h2>
                                <h2 className="text-mute">Tab 1 | Tab 2 | Tab 3</h2>
                            </div>
                        </div>
                        <table className="table w-full -z-0">
                            <tbody>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Due Date</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">12/09/2023 03:21 PM</h2>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Remaining</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, a, quibusdam quae tempore labore saepe illum qui repellat voluptatem, itaque exercitationem asperiores officia consectetur esse sunt aperiam! Explicabo, tempore assumenda!</h2>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Format</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">Electronic Field Lorem</h2>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Due Date</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">12/09/2023 03:21 PM</h2>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Remaining</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Null</h2>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, a, quibusdam quae tempore labore saepe illum qui repellat voluptatem, itaque exercitationem asperiores officia consectetur esse sunt aperiam! Explicabo, tempore assumenda!</h2>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Format</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Electronic</h2>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">Electronic Field Lorem</h2>
                                    </td>
                                </tr>
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <td className="py-3 w-1/5">
                                        <span className="text-sm">Due Date</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">12/09/2023</h2>
                                        <span className="text-sm">03:21 PM</span>
                                    </td>
                                    <td className="py-3 w-1/5">
                                        <h2 className="text-sm">Lorem Field</h2>
                                    </td>
                                    <td className="py-3 w-full">
                                        <h2 className="text-sm">12/09/2023 03:21 PM</h2>
                                    </td>
                                </tr>
                            </tbody >
                        </table >
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='text-primary bg-primary bg-opacity-20 p-4 py-1 rounded-lg hover:bg-opacity-10 duration-150'>Back</button>
                        <SlDoc className="text-2xl text-primary hover:text-3xl duration-150 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}
