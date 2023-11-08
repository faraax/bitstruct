import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useLayoutEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function ViewProfile() {
    const { profiles, selectedProfile, dispatch } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const [selectedProject, setSelectedProject] = useState([])

    useLayoutEffect(() => {
        const getProfileList = async () => {
            setLoading(true)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getProfilePortalList`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${Cookies.get('jwtToken')}`
                    },
                    data: { profileName: selectedProfile }
                }

                let { data } = await axios.request(reqOptions);
                setSelectedProject(data)
                setLoading(false)
                // console.log(data);
            } catch (err) {
                setLoading(false)
                console.log(err);
            }
        }
        if (selectedProfile) {
            getProfileList()
        }
    }, [selectedProfile])

    return (
        <>
            <div className='bg-white rounded-xl gap-5 px-10 py-3 flex flex-col justify-center shadow-lg h-full'>
                <div className='w-full bg-primary h-1 mt-4' />
                <div className='flex justify-between'>
                    <div>
                        {selectedProfile && <h2 className='text-mute'>{selectedProfile.profile_name}</h2>}
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-mute flex gap-3 items-center'>
                            Profiles Available : 2/2
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-2 flex-col'>
                        <div>
                            <h2>Profiles</h2>
                        </div>
                        <div className='flex gap-6 relative py-5'>
                            {
                                profiles?.map((list, index) => (
                                    <div onClick={() =>
                                        dispatch({ type: 'SELECTEDPROFILE', payload: list })
                                    }
                                        key={index}
                                        className={`h-24 w-24 ${selectedProfile?.profile_name === list.profile_name ? 'bg-primary text-white ' : 'text-black hover:text-white'} border border-mute rounded-full flex justify-center items-center cursor-pointer hover:bg-primary/90 duration-150`}
                                        title={list.profile_name}>
                                        <h1 className='text-3xl'>{list.profile_name.split("")[0]}</h1>
                                        <span className='absolute -bottom-0 text-sm text-slate-800 font-semibold min-w-max' >{list.profile_name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <table className="table w-full -z-0 my-5">
                            <thead className="sticky top-24 z-40 bg-[#FAFCFF] border-b border-mute border-opacity-20">
                                <tr className="text-mute text-left border-b border-mute border-opacity-20">
                                    <th className="font-normal py-3 pl-2">States</th>
                                    <th className="font-normal">Project Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedProject.length === 0 && (
                                        <tr className=" text-left border-b border-mute border-opacity-20">
                                            <td className="py-3 w-1/5">
                                                <span className="text-sm">No Assigned</span>
                                            </td>
                                            <td className="py-3 w-1/5">
                                                <span className="text-sm">No Assigned</span>
                                            </td>
                                        </tr>
                                    )
                                }
                                {
                                    selectedProject.length > 0 && !loading && selectedProject.map((tableList, index) => (
                                        <tr key={index} className=" text-left border-b border-mute border-opacity-20">
                                            <td className="py-3 w-1/5">
                                                <span className="text-sm">{tableList.state}</span>
                                            </td>
                                            <td className="flex py-3 relative gap-2 flex-wrap">
                                                {
                                                    tableList.projectName.map((projectLsit, index) => (
                                                        <div key={index} title={projectLsit.portalName} className='bg-primary/70 hover:bg-primary px-3 flex gap-4 items-center justify-between duration-150 rounded-lg'>
                                                            <h2 className="text-sm my-1 font-bold text-black/60" >{projectLsit.portalName.substring(0, 20)}...</h2>
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody >
                        </table >
                        {
                            loading && <div className="flex  items-center gap-2 p-3 rounded-lg font-bold cursor-wait w-full text-secondary">
                                <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                    <path
                                        className="fill-mute"
                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                    <path
                                        className="fill-primary"
                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                </svg>
                                <span className="text-lg text-primary">Loading...</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
