import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'
import Cookies from 'js-cookie'
import { BsPersonFillAdd } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import GetProfilePortalTable from './ServerComponents/GetProfilePortalTable'

export default function ViewProfile() {
    const { profiles, selectedProfile } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const [currentProfile, setCurrentProfile] = useState(null)
    const [selectedProject, setSelectedProject] = useState([])
    // const token = Cookies.get('jwtToken')

    useEffect(() => {
        setCurrentProfile(selectedProfile)
    }, [selectedProfile, setCurrentProfile])

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
            // console.log({ currentProfile, selectedProfile });
            getProfileList()
        }
    }, [currentProfile, setSelectedProject, selectedProfile])

    return (
        <>
            <div className='bg-white rounded-xl gap-5 px-10 py-3 flex flex-col justify-center shadow-lg h-full'>
                <div className='w-full bg-primary h-1 mt-4' />
                <div className='flex justify-between'>
                    <div>
                        {profiles && !selectedProfile && <h2 className='text-mute'>{profiles[0].profile_name}</h2>}
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
                                        setCurrentProfile(list.profile_name)
                                    }
                                        key={index}
                                        className={`h-24 w-24 ${currentProfile === list.profile_name ? 'bg-primary text-white ' : 'text-black hover:text-white'} border border-mute rounded-full flex justify-center items-center cursor-pointer hover:bg-primary/90 duration-150`}
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
                            {/* <GetProfilePortalTable currentProfile={currentProfile} token={token} /> */}
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
                                                    tableList.projectName.map((projectLsit) => (
                                                        <div key={projectLsit.portalId} title={projectLsit.portalName} className='bg-primary/70 hover:bg-primary px-3 flex gap-4 items-center justify-between duration-150 rounded-lg'>
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
                            loading && <h2>Loading</h2>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
