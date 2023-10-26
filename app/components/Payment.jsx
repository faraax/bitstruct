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
            console.log(data.url);
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
                            className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl cursor-wait">
                            Wait
                        </button>
                    }
                    {link && <a href={link}
                        className="relative text-white group w-full bg-primary flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] px-5 py-2 border rounded-xl">
                        Next
                    </a>}
                </form>
            </div>
        </div>
    )
}
