"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Username from '../components/clientComponents/Username'
import Navbar from '../components/Navbar'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CgClose } from 'react-icons/cg'
import { SlDoc } from '../Utils/icons'


export default function SettingsPage() {
    const { profiles, selectedProfile } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const [currentProfile, setCurrentProfile] = useState()
    const [statesList, setStateList] = useState([])
    const [selectedState, setSelectedState] = useState(null)
    const [portalListByState, setPortalListByState] = useState([])
    const [selectedProject, setSelectedProject] = useState([])

    useEffect(() => {
        setCurrentProfile(selectedProfile?.profile_name)
    }, [selectedProfile, setCurrentProfile])

    useLayoutEffect(() => {
        const getStates = async () => {
            setLoading(true)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getAvailableStates`,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }

                let { data } = await axios.request(reqOptions);
                setStateList(data);
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.log(err);
            }
        }

        const getPortals = async () => {
            setLoading(true)
            const formData = new FormData();
            formData.append("portalState", selectedState)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/listPortalsByState`,
                    method: "POST",
                    headers: {
                        // "Content-Type": "application/json",
                        "Authorization": `JWT ${Cookies.get('jwtToken')}`
                    },
                    data: { portalState: selectedState }
                }

                let { data } = await axios.request(reqOptions);
                setLoading(false)
                setPortalListByState(data)
                // console.log(data);
            } catch (err) {
                setLoading(false)
                console.log(err);
            }
        }
        getStates()
        // console.log(selectedState);

        if (selectedState) {
            getPortals()
        }
    }, [selectedState, setLoading])

    const handleSeleteState = (e) => {
        setSelectedState(e.target.value)
    }


    const handleProjectState = (e) => {

        const { value } = e.target;
        const selectedList = portalListByState.filter((list) => list.portalName === value)[0]

        // Find the index of the selected state in the state array
        const stateIndex = selectedProject.findIndex((project) => project.state === selectedState);

        function containsObject(obj, list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].portalId === obj.portalId && list[i].portalName === obj.portalName) {
                    return true;
                }
            }
            return false;
        }
        if (value === "Select Project") {
            return;
        }

        if (stateIndex === -1) {
            let value = { portalId: selectedList.portalId, portalName: selectedList.portalName }
            setSelectedProject([
                ...selectedProject,
                {
                    state: selectedState,
                    projectName: [value],
                },
            ]);

        } else {
            let value = { portalId: selectedList.portalId, portalName: selectedList.portalName }

            const isDuplicate = containsObject(value, selectedProject[stateIndex].projectName);

            if (!isDuplicate) {
                setSelectedProject([
                    ...selectedProject.slice(0, stateIndex),
                    {
                        ...selectedProject[stateIndex],
                        projectName: [...selectedProject[stateIndex].projectName, value],
                    },
                    ...selectedProject.slice(stateIndex + 1),
                ]);
            }
        }
    };

    const handleDeleteState = (portalId) => () => {
        const updatedProjects = selectedProject.map((state) => {
            const updatedProjectName = state.projectName.filter(
                (project) => project.portalId !== portalId
            );

            return {
                state: state.state,
                projectName: updatedProjectName,
            };
        });

        // Remove parent objects with empty projectName arrays
        const nonEmptyProjects = updatedProjects.filter(
            (state) => state.projectName.length > 0
        );

        setSelectedProject(nonEmptyProjects);;
        // console.log(stateId, projectId);
    }

    const handleSaveSettings = async () => {
        try {
            const portalIds = selectedProject.flatMap(state => state.projectName.map(project => project.portalId));
            let reqOptions = {
                // url: `${process.env.APIENDPOINT}api/addPortalsToProfile`,
                url: `${process.env.APIENDPOINT}api/getProfilePortalList`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${Cookies.get('jwtToken')}`
                },
                // data: { profileName: currentProfile, portalsList: portalIds }
                data: { profileName: currentProfile }
            }

            let { data } = await axios.request(reqOptions);
            // setLoading(false)
            // setPortalListByState(data)
            console.log(data);
        } catch (err) {
            // setLoading(false)
            console.log(err);
        }


        // console.log(data);
    }

    return (
        <div className="w-full">
            <Navbar />
            <div className='pt-5 px-10 py-5 text-lg font-medium'>
                <h2>Users Profiles Settings</h2>
            </div>
            <div className='px-10 py-5'>
                <div className='bg-white rounded-xl gap-5 px-10 py-3 flex flex-col justify-center shadow-sm h-full'>
                    <div className='w-full bg-primary h-1 mt-4' />
                    <div className='flex justify-between'>
                        <div>
                            <Username classList={"text-mute"} />
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='text-mute flex gap-3 items-center'>
                                Profiles Available : 2/2
                            </p>
                        </div>
                    </div>
                    <div>
                        {/* <div className='border-b border-mute border-opacity-20 pb-3'>
                            <span className="text-sm text-mute">Project Title | Invitation# SCP12345</span>
                            <div className='flex justify-between'>
                                <h2 className="text-black">Texas Leather Services</h2>
                            </div>
                        </div> */}
                        <div className='flex gap-2 flex-col'>
                            <div>
                                <h2>Profiles</h2>
                            </div>
                            <div className='flex gap-5'>
                                {
                                    profiles?.map((list, index) => (
                                        <div onClick={() =>
                                            setCurrentProfile(list.profile_name)
                                        }
                                            key={index}
                                            className={`relative h-28 w-28 ${currentProfile === list.profile_name ? 'bg-primary' : 'bg-primary/60'} border border-mute rounded-xl flex justify-center items-center cursor-pointer hover:bg-primary/90`} title={list.profile_name}>
                                            <h1 className='text-white text-3xl'>{list.profile_name.split("")[0]}</h1>
                                            <span className='absolute -bottom-0 text-sm text-slate-800 font-semibold' >{list.profile_name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <div className='flex gap-4'>
                                    <div>
                                        {/* <div className="relative group w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                                            <p className="px-4 text-primary text-left">{selectedState ? selectedState : 'Select State'} {console.log(selectedState)}</p>
                                            <div className="z-10 absolute hidden group-focus:block top-full -right-1 h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded" onClick={() => console.log("asdq")}>
                                                <ul className="text-left flex flex-col bg-red-100 text-primary">
                                                    {
                                                        statesList.map((list, index) => (
                                                            <li
                                                                key={index}
                                                                className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20 w-full"
                                                                onClick={() => console.log("sdfsdf")}
                                                            >
                                                                {list}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div> */}
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
                                        {/* <button className="relative group w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                                            <p className="px-4 text-primary">Stage</p>
                                            <div className="z-10 absolute hidden group-focus:block top-full -right-1 h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded">
                                                <ul className="text-left flex flex-col bg-white text-primary">
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 1</li>
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 2</li>
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 3</li>
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 4</li>
                                                    <li className="px-4 py-2 border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 5</li>
                                                </ul>
                                            </div>
                                        </button> */}
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
                                                                // console.log(list)
                                                                <option key={index} content={list.portalState} value={list.portalName} title={list.portalId} className='text-sm h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded'>{list.portalName}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </>
                                            ) : <h2>Loading</h2>
                                        }

                                    </div>
                                    {/* <div>
                                        <button className="relative group w-full bg-white flex justify-between items-center placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                                            <p className="px-4 text-primary">Stage</p>
                                            <div className="z-10 absolute hidden group-focus:block top-full -right-1 h-48 overflow-y-auto min-w-full w-max border-[#BCE0FD] border mt-1 rounded">
                                                <ul className="text-left flex flex-col bg-white text-primary">
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 1</li>
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 2</li>
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 3</li>
                                                    <li className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 4</li>
                                                    <li className="px-4 py-2 border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20">Option 5</li>
                                                </ul>
                                            </div>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
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
                                                        // console.log(projectLsit)
                                                        <div key={projectLsit.portalId} title={projectLsit.portalName} className='bg-primary/70 hover:bg-primary px-3 flex gap-4 items-center justify-between duration-150 rounded-lg'>
                                                            <h2 className="text-sm my-1 font-bold text-black/60" >{projectLsit.portalName.substring(0, 20)}...</h2>
                                                            {/* <h2 className="text-sm my-1 font-bold text-black/60" >{projectLsit}...</h2> */}
                                                            <span onClick={handleDeleteState(projectLsit.portalId)} className='hover:bg-primary text-black/30 hover:text-black/40 hover:font-bold cursor-pointer m-1'><CgClose /></span>
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody >
                        </table >
                    </div>
                    <div className='flex justify-between items-center'>
                        {/* <SlDoc className="text-2xl text-primary hover:text-3xl duration-150 cursor-pointer" /> */}
                        <button onClick={handleSaveSettings} className='text-primary bg-primary bg-opacity-20 p-4 py-1 rounded-xl hover:bg-opacity-10 duration-150'>Save Settings</button>
                    </div>
                </div>
            </div>
        </div >
    )
}