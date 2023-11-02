import { CgUnavailable } from "react-icons/cg"
import { MdOutlineEventAvailable } from "react-icons/md"

export default function Table({ portalData }) {
    return (
        <table className="table-auto w-full -z-0 my-3">
            {
                portalData && (
                    <thead className="z-40 bg-[#FAFCFF] border-b border-mute border-opacity-20">
                        <tr className="text-mute text-left border-b border-mute border-opacity-20">
                            <th className="font-normal py-3 px-3">County</th>
                            <th className="font-normal py-3 px-3">BidDueDate</th>
                            <th className="font-normal py-3 px-3">BidId</th>
                            <th className="font-normal py-3 px-3">BidResponseFormat</th>
                            <th className="font-normal py-3 px-3">BidResponseFormatStr</th>
                            <th className="font-normal py-3 px-3">BidTemplateType</th>
                            <th className="font-normal py-3 px-3">BidTypeId</th>
                            <th className="font-normal py-3 px-3">ByInvitation</th>
                            <th className="font-normal py-3 px-3">CategoryIds</th>
                            <th className="font-normal py-3 px-3">CompanyId</th>
                            <th className="font-normal py-3 px-3">EstimatedBid</th>
                            <th className="font-normal py-3 px-3">InvitationNum</th>
                            <th className="font-normal py-3 px-3">IssueDate</th>
                            <th className="font-normal py-3 px-3">PageScrape</th>
                            <th className="font-normal py-3 px-3">StageId</th>
                            <th className="font-normal py-3 px-3">StageStr</th>
                            <th className="font-normal py-3 px-3">Title</th>
                        </tr>
                    </thead>
                )
            }

            <tbody>
                {
                    portalData && portalData.portal_data.map((portalList, index) => (
                        <tr key={index} className="text-mute text-left border-b border-mute border-opacity-20">
                            {
                                Object.keys(portalList).map((objKeys, _i) => (
                                    <td className="py-3 px-10" key={_i}>
                                        {objKeys === "url" ? (
                                            <></>
                                        ) : (objKeys === "title") ? (
                                            portalList[objKeys].substring(0, 10)
                                        ) : (objKeys === "bidDueDate") ? (
                                            portalList[objKeys].substring(0, 10)
                                        ) : (objKeys === "issueDate") ? (
                                            portalList[objKeys].substring(0, 10)
                                        ) : (objKeys === "byInvitation") ? (
                                            portalList[objKeys] ? <MdOutlineEventAvailable className="text-xl text-primary" /> : <CgUnavailable className="text-xl text-red-700" />
                                        ) : (portalList[objKeys] === "") ? (
                                            'Nill'
                                        ) : (
                                            portalList[objKeys]
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
