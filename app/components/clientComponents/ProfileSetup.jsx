"use client"
import Payment from "../../components/Payment";
import Cookies from "js-cookie";
import axios from "axios";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useAuthContext } from "../../hooks/useAuthContext";
import SetProfleName from "../../components/SetProfleName";


export default function ProfileSetup() {
    const [selectedTab, setSelectedTab] = useState('Payment');
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const token = Cookies.get('jwtToken');

    useEffect(() => {

        const getSub = async () => {
            setIsPending(true)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/get_subscription_data`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${token}`
                    }
                }
                let resp = await axios.request(reqOptions);
                dispatch({ type: 'SETSUB', payload: resp.data })
                setIsPending(false)
                if (resp.data.product.active) {
                    setSelectedTab("Profile")
                }
            } catch (err) {
                console.log(err);
                setIsPending(false)
            }
        }

        const getProfile = async () => {
            setIsPending(true)
            try {
                let reqOptions = {
                    url: `${process.env.APIENDPOINT}api/getUsersProfilesList`,
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${token}`
                    }
                }
                let resp = await axios.request(reqOptions);
                setIsPending(false)
                if (resp.status === 200) {
                    dispatch({ type: 'SETPROFILE', payload: resp.data.profiles })
                }
            } catch (err) {
                console.log(err);
                setIsPending(false)
            }
        }

        if (token) {
            getSub()
            getProfile()
        }

    }, [setSelectedTab, dispatch, token])

    return (
        <>
            <ul className="flex gap-5">
                <m.li
                    className={selectedTab === "Payment" ? "Selected underline text-primary text-xl flex gap-2 justify-center items-center" : "text-mute text-xl flex gap-2 justify-center items-center"} layoutId="underline">
                    Select Payment Method <MdDoubleArrow className="text-lg" />
                </m.li>
                <m.li
                    className={selectedTab === "Profile" ? "Selected underline text-primary text-xl flex gap-2 justify-center items-center" : "text-mute text-xl flex gap-2 justify-center items-center"} layoutId="underline">
                    Enter Profile <MdDoubleArrow className="text-lg" />
                </m.li>
                <m.li className={selectedTab === "Profile" ? "text-xl flex gap-2 justify-center items-center text-mute" : "text-mute text-xl flex gap-2 justify-center items-center"}
                    layoutId="underline">
                    Dashboard </m.li>
                <m.div layoutId="underline" />
            </ul>
            <AnimatePresence mode="wait">
                <m.div
                    key={selectedTab ? selectedTab : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {selectedTab === "Profile" ? <SetProfleName isPending={isPending} setIsPending={setIsPending} /> : <Payment isPending={isPending} setIsPending={setIsPending} />}
                </m.div>
            </AnimatePresence>
        </>
    )
}
