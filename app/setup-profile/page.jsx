"use client"
import axios from 'axios';
import Image from "next/image";
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import useAuth from '../hooks/useAuth';
import { IoLogOut } from '../Utils/icons'
import { useEffect, useState } from 'react';
import logo from '../../public/BidStruct-Dark.png'
import { useAuthContext } from '../hooks/useAuthContext';
import { redirect } from 'next/navigation';
import Loading from '../loading';

const ProfileSetup = dynamic(() => import('../components/clientComponents/ProfileSetup'))

export default function SetupProfilePage() {
    const { logout } = useAuth();
    // const [clientIsReady, setClientIsReady] = useState(false)
    const [loading, setloading] = useState(false)
    const { dispatch, profiles } = useAuthContext()
    const state = useAuthContext()
    const token = Cookies.get('jwtToken')

    useEffect(() => {
        const getProfile = async () => {
            // setClientIsReady(false)
            setloading(true)
            try {
                let reqOptions = {
                    // url: `${process.env.APIENDPOINT}api/getUsersProfilesList`,
                    url: `/api/getUsersProfilesList`,
                    // method: "POST",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `JWT ${token}`
                    }
                }
                let resp = await axios.request(reqOptions);
                if (resp.status === 200) {
                    dispatch({ type: 'SETPROFILE', payload: resp?.data?.profiles })
                    dispatch({ type: 'SELECTEDPROFILE', payload: resp?.data?.profiles[0] })
                } else {
                    throw new Error(resp)
                }
                // console.log(resp.data.profiles);
                // if (resp?.data?.profiles?.length === 0) {
                //     setClientIsReady(false)
                // } else {
                //     setClientIsReady(true)
                //     // console.log(resp.data.profiles);
                // }
            } catch (err) {
                // setClientIsReady(true)
                console.log(err);
            }
            finally {
                setloading(false)
            }
        }
        if (token) {
            getProfile()
        }
    }, [dispatch, token])
    // console.log(clientIsReady);
    // if (clientIsReady) return redirect('/')
    return (
        <div className="col-span-12">
            <nav className="py-5 px-10 shadow-md sticky top-0 h-[10vh] flex items-center justify-between">
                <div>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286} />
                </div>
                <div>
                    <button
                        onClick={() => logout()}
                        // onClick={() => console.log(state)}
                        className='flex items-center gap-2 bg-primary text-white p-3 rounded-lg hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD]'>
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
