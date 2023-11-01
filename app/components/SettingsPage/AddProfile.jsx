import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'
import Cookies from 'js-cookie'
import { BsPersonFillAdd } from 'react-icons/bs'
// import { CgClose } from 'react-icons/cg'

export default function AddProfile() {
    const { profiles, selectedProfile, dispatch } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState(null)
    const [addNewProfile, setAddNewProfile] = useState(false)
    const [profileName, setProfileName] = useState('')

    const handleNewProfile = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMsg(null)
        try {
            let reqOptions = {
                url: `${process.env.APIENDPOINT}api/addProfile`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${Cookies.get('jwtToken')}`
                },
                data: { profileName: profileName },
            }

            let resp = await axios.request(reqOptions);
            console.log(resp.data);
            if (resp) {
                setLoading(false)
                setMsg("User Updated")
                setTimeout(() => setMsg(null), 5000)
            }

        }
        catch (err) {
            setLoading(false)
            setMsg("Error")
            console.log("Login Err =>", err.message);
            setTimeout(() => setMsg(null), 5000)
        }
    }
    return (
        <div>
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
                            <div>
                                <div
                                    onClick={() => setAddNewProfile(!addNewProfile)}
                                    className={`relative h-24 w-24 border border-mute rounded-full flex justify-center items-center cursor-pointer hover:bg-primary/90 hover:text-white duration-150`}>
                                    <h1 className='text-4xl'><BsPersonFillAdd /></h1>
                                    <span className='absolute -bottom-5 text-sm text-slate-800 font-semibold' >Add Profile</span>
                                </div>
                            </div>
                        </div>
                        {
                            addNewProfile && (
                                <form className='flex gap-4' onSubmit={handleNewProfile}>
                                    <input
                                        onChange={(e) => setProfileName(e.target.value)}
                                        name="profileName"
                                        id="profileName"
                                        value={profileName}
                                        className="placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                                        placeholder="Type Profile Name"
                                        required
                                    />
                                    {
                                        loading && <button
                                            disabled
                                            className='cursor-wait flex px-7 py-2 items-center gap-2 bg-primary text-white rounded-xl hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                                            <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                                <path
                                                    className="fill-white"
                                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                                <path
                                                    className="fill-primary"
                                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                            </svg>
                                            <span className="text-lg text-white">Loading...</span>
                                        </button>
                                    }
                                    {
                                        !loading && <button
                                            className='flex px-7 py-2 items-center gap-2 bg-primary text-white rounded-xl hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                                            Save
                                        </button>
                                    }

                                </form>
                            )
                        }
                        {/* <div>
                            {
                                editButton && (
                                    <div className='flex gap-4'>
                                        <div>
                                            <label >Select State</label>
                                            <select
                                                onChange={handleSeleteState}
                                                className='w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl' required>
                                                <option
                                                    selected disabled value={null}>Select State</option>
                                                {
                                                    statesList.map((list, index) => (
                                                        <option key={index} value={list} className='text-sm h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded'>{list}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {
                                                !loading ? (
                                                    <>
                                                        <label >Select Project</label>
                                                        <select
                                                            onChange={handleProjectState}
                                                            className='w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl' required>
                                                            <option
                                                                value={null} selected defaultChecked className='active:bg-mute hover:bg-mute'>Select Project</option>
                                                            {
                                                                portalListByState.map((list, index) => (
                                                                    <option key={index} content={list.portalState} value={list.portalName} title={list.portalId} className='text-sm h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded'>{list.portalName}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </>
                                                ) : <h2>Loading</h2>
                                            }

                                        </div>
                                    </div>
                                )
                            }
                            {
                                addNewProfile && (
                                    <form className='flex gap-4' onSubmit={handleNewProfile}>
                                        <input
                                            onChange={(e) => setProfileName(e.target.value)}
                                            name="profileName"
                                            id="profileName"
                                            value={profileName}
                                            className="placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                                            placeholder="Type Profile Name"
                                            required
                                        />
                                        <button
                                            className='flex px-7 py-2 items-center gap-2 bg-primary text-white rounded-xl hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                                            Save
                                        </button>
                                    </form>
                                )
                            }
                            {
                                !addNewProfile && (
                                    <div>
                                        <button onClick={() => setEditButton(!editButton)}
                                            className='flex px-7 py-2 items-center gap-2 bg-primary text-white rounded-xl hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
                                            Edit
                                        </button>
                                    </div>
                                )
                            }

                        </div> */}
                    </div>
                    {
                        msg && <h3>{msg}</h3>
                    }
                    {/* <table className="table w-full -z-0 my-5">
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
                                            <span className="text-sm">Empty List</span>
                                        </td>
                                        <td className="py-3 w-1/5">
                                            <span className="text-sm">Empty List</span>
                                        </td>
                                    </tr>
                                )
                            }
                            {
                                selectedProject.length > 0 && selectedProject.map((tableList, index) => (
                                    <tr key={index} className=" text-left border-b border-mute border-opacity-20">
                                        <td className="py-3 w-1/5">
                                            <span className="text-sm">{tableList.state}</span>
                                        </td>
                                        <td className="flex py-3 relative gap-2 flex-wrap">
                                            {
                                                tableList.projectName.map((projectLsit) => (
                                                    <div key={projectLsit.portalId} title={projectLsit.portalName} className='bg-primary/70 hover:bg-primary px-3 flex gap-4 items-center justify-between duration-150 rounded-lg'>
                                                        <h2 className="text-sm my-1 font-bold text-black/60" >{projectLsit.portalName.substring(0, 20)}...</h2>
                                                        <span onClick={handleDeleteState(projectLsit.portalId)} className='hover:bg-primary text-black/30 hover:text-black/40 hover:font-bold cursor-pointer m-1'>
                                                            <CgClose />
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody >
                    </table > */}
                </div>
                {/* {
                    editButton && (
                        <div className='flex justify-between items-center'>
                            <button onClick={handleSaveSettings} className='text-primary bg-primary bg-opacity-20 p-4 py-1 rounded-xl hover:bg-opacity-10 duration-150'>Save Settings</button>
                        </div>
                    )
                } */}
            </div>
        </div>
    )
}
