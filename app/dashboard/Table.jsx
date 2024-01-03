import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link"
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md"

export default function Table({ portalData, searchParams, fromDate, toDate }) {
    const token = Cookies.get('jwtToken');
    const [favs, setFavs] = useState([])
    const searchParam = useSearchParams()

    const filteredData = portalData?.portal_data.filter(item => {
        const bidDueDate = new Date(item.bidDueDate.substring(0, 10));
        if (fromDate && toDate) {
            // console.log({ bidDueDate });
            return bidDueDate >= new Date(fromDate) && bidDueDate <= new Date(toDate);
        } else if (fromDate) {
            // console.log({ bidDueDate });
            return bidDueDate >= new Date(fromDate) && bidDueDate;
        } else if (toDate) {
            // console.log({ bidDueDate });
            return bidDueDate && bidDueDate <= new Date(toDate);
        } else {
            // console.log({ bidDueDate });
            return bidDueDate
        }
    });

    const handleFavsCounties = (list) => async (e) => {
        setFavs(prev => [...prev, list.bidId])
        try {
            let reqOptions = {
                // url: `${process.env.APIENDPOINT}api/add-to-favorite`,
                url: `/api/add-to-favorite`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `JWT ${token}`
                },
                data: JSON.stringify(list)
            }
            let resp = await axios.request(reqOptions);
            // console.log(resp.data.message);
            // console.log(resp);
        } catch (err) {
            console.log(err);
        }
    }

    const catsfilteredData = () => {
        if (searchParam.get('categories')) {
            const filteredList = filteredData?.filter(item => {
                const matchedCategories = item.CategoriesList.filter(category => searchParam.get('categories')?.split(',').includes(category.split(' - ')[1].trim()));
                return matchedCategories.length > 0;
            });
            return filteredList
        } else {
            return filteredData
        }
    }

    return (
        <table className="table-auto w-full -z-0 my-3">
            {
                portalData && (
                    <thead className="z-40 bg-[#FAFCFF] border-b border-mute border-opacity-20">
                        <tr className="text-mute text-left border-b border-mute border-opacity-20">
                            <th className="font-normal py-3 pr-10">Posted Date {`(yyyy/mm/dd)`}</th>
                            <th className="font-normal py-3 pr-10">Project Title</th>
                            <th className="font-normal py-3 pr-10">Estimated Bid Value</th>
                            <th className="font-normal py-3 pr-10">Due Date {`(yyyy/mm/dd)`}</th>
                            <th className="font-normal py-3 pr-10">Categories</th>
                            <th className="font-normal py-3 pr-10">URL</th>
                            <th className="font-normal py-3 pr-10">Docs</th>
                            <th className="font-normal py-3 pr-10">Favorite</th>
                        </tr>
                    </thead>
                )
            }
            <tbody>
                {
                    portalData && catsfilteredData().map((list, index) => (
                        <tr key={index} className="text-mute text-left border-b border-mute border-opacity-20">
                            <td className="p-3" title={list.issueDate.substring(0, 10)}>
                                {list.issueDate.substring(0, 10)}
                            </td>
                            <td className="p-3 w-72" title={list.title}>
                                {list.title}
                            </td>
                            <td className="p-3" title={list.estimatedBid}>
                                {list.estimatedBid ? list.estimatedBid : "null"}
                            </td>
                            <td className="p-3" title={list.bidDueDate.substring(0, 10)}>
                                {list.bidDueDate.substring(0, 10)}
                            </td>
                            <td className="p-3 w-36" title={list.CategoriesList.join(", ")}>
                                <Link
                                    href={`?${searchParams}&catsModel=show&index=${index}`}
                                    scroll={false}
                                    className="text-base relative py-1 text-white bg-primary/60 flex justify-center items-center hover:bg-opacity-80 duration-150 hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] border rounded-xl">
                                    <span title="View More">
                                        View
                                    </span>
                                </Link>
                            </td>
                            <td className="p-3 w-32" title={`${list.url}#bidDocs`}>
                                <Link
                                    href={`${list.url}`}
                                    target="_blank"
                                    className="text-base py-1 px-2 text-primary bg-white flex justify-center items-center hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] border rounded-xl">
                                    Open bid
                                </Link>
                            </td>
                            <td className="p-3 w-32" title={`${list.url}#bidDocs`}>
                                <Link
                                    href={`${list.url}#bidDocs`}
                                    target="_blank"
                                    className="text-base py-1 px-2 text-primary bg-white flex justify-center items-center hover:outline-none hover:ring-1 hover:ring-primary border-[#BCE0FD] border rounded-xl">
                                    Open Docs
                                </Link>
                            </td>
                            <td
                                onClick={handleFavsCounties(list)}
                                className={`p-3 hover:text-primary cursor-pointer text-2xl ${favs.includes(list.bidId) ? "text-primary" : ''}`} title={`${list.url}#bidDocs`}>
                                <MdFavoriteBorder />
                            </td>
                        </tr>
                    ))
                }
                {
                    portalData?.portal_data.length === 0 && (
                        <tr className="text-mute text-left border-b border-mute border-opacity-20">
                            <td className="py-3 px-10 text-mute" colSpan={17}>No Data Available</td>
                        </tr>
                    )
                }
            </tbody>
        </table >
    )
}