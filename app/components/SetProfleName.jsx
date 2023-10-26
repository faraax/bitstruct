"use client"
import Image from "next/image";
import profileImg from '../../public/profile.jpg'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useAuthContext } from "../hooks/useAuthContext";


export default function SetProfleName({ isPending, setIsPending }) {
    const [name, setName] = useState('')
    const { dispatch, profile } = useAuthContext()


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('profileName', name)
        setIsPending(true)
        try {
            let reqOptions = {
                url: `${process.env.APIENDPOINT}api/addProfile`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${Cookies.get('jwtToken')}`
                },
                data: { profileName: name },
            }

            let resp = await axios.request(reqOptions);

            console.log(resp.data);
            setIsPending(false)
            if (resp.data === "Profile Added") {
                dispatch({ type: 'SETPROFILE', payload: data.data })
                console.log(profile);
                redirect('/dashboard')
            }
        }
        catch (err) {
            console.log("Login Err =>", err.message);
            setIsPending(false)
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center flex-col gap-4">
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="w-60 h-60 rounded-full overflow-hidden border-mute border-2">
                        <Image
                            src={profileImg}
                            alt='Profile'
                        />
                    </div>
                    <h2 className="text-4xl">Add Profile</h2>
                </div>
                <div>
                    <form
                        onSubmit={handleFormSubmit} className="flex gap-3">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            name="profileName"
                            id="profileName"
                            value={name}
                            className="placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl"
                            placeholder="Type Profile Name"
                            required
                        />
                        {
                            isPending && <button
                                className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl cursor-wait">
                                Wait
                            </button>
                        }
                        {
                            !isPending && <button
                                className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                                Save
                            </button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
