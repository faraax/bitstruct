import Link from "next/link"
import { AiOutlineEye } from "react-icons/ai"
import { CgUnavailable } from "react-icons/cg"
import { MdOutlineEventAvailable } from "react-icons/md"

export default function Table({ portalData }) {
    return (
        <table className="table-auto w-full -z-0 my-3">
            {
                portalData && (
                    <thead className="z-40 bg-[#FAFCFF] border-b border-mute border-opacity-20">
                        <tr className="text-mute text-left border-b border-mute border-opacity-20">
                            <th className="font-normal py-3 pr-10">County</th>
                            <th className="font-normal py-3 pr-10">BidDueDate</th>
                            <th className="font-normal py-3 pr-10">BidId</th>
                            <th className="font-normal py-3 pr-10">BidResponseFormat</th>
                            <th className="font-normal py-3 pr-10">BidResponseFormatStr</th>
                            <th className="font-normal py-3 pr-10">BidTemplateType</th>
                            <th className="font-normal py-3 pr-10">BidTypeId</th>
                            <th className="font-normal py-3 pr-10">ByInvitation</th>
                            <th className="font-normal py-3 pr-10">CategoryName</th>
                            <th className="font-normal py-3 pr-10">CompanyId</th>
                            <th className="font-normal py-3 pr-10">EstimatedBid</th>
                            <th className="font-normal py-3 pr-10">InvitationNum</th>
                            <th className="font-normal py-3 pr-10">IssueDate</th>
                            <th className="font-normal py-3 pr-10">PageScrape</th>
                            <th className="font-normal py-3 pr-10">StageId</th>
                            <th className="font-normal py-3 pr-10">StageStr</th>
                            <th className="font-normal py-3 pr-10">Title</th>
                        </tr>
                    </thead>
                )
            }
            <tbody>
                {
                    portalData && portalData.portal_data.map(({ url, CategoriesList, ...rest }, index) => (
                        <tr key={index} className="text-mute text-left border-b border-mute border-opacity-20">
                            {
                                Object.keys(rest).map((objKeys, _i) => (
                                    <td className="p-3" key={_i} title={rest[objKeys]}>
                                        {(objKeys === "title") ? (
                                            rest[objKeys].substring(0, 10)
                                        ) : (objKeys === "bidDueDate") ? (
                                            rest[objKeys].substring(0, 10)
                                        ) : (objKeys === "issueDate") ? (
                                            rest[objKeys].substring(0, 10)
                                        ) : (objKeys === "byInvitation") ? (
                                            rest[objKeys] ? <MdOutlineEventAvailable className="text-xl text-primary" /> : <CgUnavailable className="text-xl text-red-700" />
                                        ) : (rest[objKeys] === "") ? (
                                            'Nill'
                                        ) : (objKeys === "categoryIds") ? (
                                            <Link href={'?catsModel=show'}>
                                                <span title="View More">
                                                    {rest[objKeys]}
                                                    <AiOutlineEye
                                                        className="text-xl text-mute bg-primary/20 h-7 w-7 rounded-full cursor-pointer hover:bg-primary/30 duration-150 hover:text-secondary/60" />
                                                </span>
                                            </Link>
                                        ) : (
                                            rest[objKeys]
                                        )
                                        }
                                    </td>
                                ))
                            }
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
