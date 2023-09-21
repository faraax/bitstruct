
export default function Cards({ icon, totalBids, percentage, heading }) {
    return (
        <div className="flex flex-col p-5 gap-1 border border-mute border-opacity-20 rounded-lg bg-white col-span-1">
            <div className="flex justify-center items-center h-16 w-16 bg-primary bg-opacity-20 p-3 rounded-full">
                {icon}
            </div>
            <h2 className="text-mute">{heading}</h2>
            <h2 className="text-2xl">{totalBids}</h2>
            <p className="text-mute"><span className="text-primary">{percentage}</span> from last month</p>
        </div>
    )
}
