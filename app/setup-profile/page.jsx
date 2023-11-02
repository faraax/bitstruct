"use client"
import axios from 'axios';
import Image from "next/image";
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import useAuth from '../hooks/useAuth';
import { IoLogOut } from '../Utils/icons'
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../../public/BidStruct-Dark.png'

const ProfileSetup = dynamic(() => import('../components/clientComponents/ProfileSetup'))

export default function SetupProfilePage() {
    const { logout } = useAuth();
    const [clientIsReady, setClientIsReady] = useState(null)

    useEffect(() => {
        const getProfile = async () => {
            setClientIsReady(null)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getUsersProfilesList`,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${Cookies.get('jwtToken')}`
                    }
                }
                let resp = await axios.request(reqOptions);
                if (resp.data.profiles.length === 0) {
                    setClientIsReady(true)
                } else {
                    setClientIsReady(false)
                }
            } catch (err) {
                setClientIsReady(false)
                console.log(err);
            }
        }
        getProfile()
    }, [])

    if (clientIsReady === false) return redirect('/dashboard')

    return clientIsReady && (
        <div className="col-span-12">
            <nav className="py-5 px-10 shadow-md sticky top-0 h-[10vh] flex items-center justify-between">
                <div>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286}
                    />
                </div>
                <div>
                    <button
                        onClick={() => logout()}
                        className='flex items-center gap-2 bg-primary text-white p-3 rounded-lg hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'
                    >
                        <IoLogOut
                            className='text-2xl' />
                        <span className='text-base'>
                            Logout
                        </span>
                    </button>
                </div>
            </nav>
            <div className="h-[90vh] flex flex-col items-center justify-center gap-10">
                <ProfileSetup />
            </div>
        </div>
    )
}
