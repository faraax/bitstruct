import axios from "axios";

async function getProfileList(currentProfile, token) {
    try {
        let reqOptions = {
            url: `${process.env.APIENDPOINT}api/getProfilePortalList`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            },
            data: { profileName: currentProfile }
        }

        let { data } = await axios.request(reqOptions);
        // let res = await fetch(`${process.env.APIENDPOINT}api/getProfilePortalList`,{
        //     headers:{
        //         // au
        //     }
        // });
        // return res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export default function GetProfilePortalTable({ currentProfile, token }) {
    const selectedProject = getProfileList(currentProfile, token)
    return (
        <tbody>
            {
                selectedProject.length === 0 && (
                    <tr className=" text-left border-b border-mute border-opacity-20">
                        <td className="py-3 w-1/5">
                            <span className="text-sm">No Assigned</span>
                        </td>
                        <td className="py-3 w-1/5">
                            <span className="text-sm">No Assigned</span>
                        </td>
                    </tr>
                )
            }
            {
                selectedProject.length > 0 && !loading && selectedProject.map((tableList, index) => (
                    <tr key={index} className=" text-left border-b border-mute border-opacity-20">
                        <td className="py-3 w-1/5">
                            <span className="text-sm">{tableList.state}</span>
                        </td>
                        <td className="flex py-3 relative gap-2 flex-wrap">
                            {
                                tableList.projectName.map((projectLsit) => (
                                    <div key={projectLsit.portalId} title={projectLsit.portalName} className='bg-primary/70 hover:bg-primary px-3 flex gap-4 items-center justify-between duration-150 rounded-lg'>
                                        <h2 className="text-sm my-1 font-bold text-black/60" >{projectLsit.portalName.substring(0, 20)}...</h2>
                                    </div>
                                ))
                            }
                        </td>
                    </tr>
                ))
            }
        </tbody >
    )
}
