import Image from "next/image";
import payment from '../../public/payment.jpg'
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";



export default function Payment({ isPending, setIsPending }) {
    const [quantity, setQuantity] = useState(0)
    const [link, setLink] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("quantity", quantity)
        setIsPending(true)
        try {
            let reqOptions = {
                url: `${process.env.APIENDPOINT}api/checkout`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${Cookies.get('jwtToken')}`
                },
                data: formData,
            }

            let { data } = await axios.request(reqOptions);
            // console.log(data.url);
            setLink(data.url)
            setIsPending(false)
        }
        catch (err) {
            console.log("Login Err =>", err);
            setIsPending(false)
        }
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <div className="flex justify-center items-center flex-col gap-2">
                <div className="w-60 h-60 rounded-full overflow-hidden border-mute border-2">
                    <Image
                        src={payment}
                        alt='Profile'
                        width={'auto'}
                    />
                </div>
                <h2 className="text-4xl">Select No. Profiles</h2>
            </div>
            <div>
                <form
                    onSubmit={handleFormSubmit} className="flex gap-3">
                    <input
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                        name="profileName"
                        id="profileName"
                        value={quantity}
                        className="placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary border-[#BCE0FD] px-2 py-2 border rounded-xl"
                        placeholder="Number of Profile"
                        required
                    />
                    {!link && !isPending && <button
                        className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                        Save
                    </button>}
                    {
                        isPending && <button
                            disabled
                            className="gap-3 relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl cursor-wait">
                            <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                                <path
                                    className="fill-white"
                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                <path
                                    className="fill-primary"
                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                            </svg>
                            <span className="text-white">Loading...</span>
                        </button>
                    }
                    {link && <a href={link}
                        className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                        Process to checkout
                    </a>}
                </form>
            </div>
        </div>
    )
}
