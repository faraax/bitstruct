
export default function Cards({ id, icon, totalBids, percentage, heading }) {
    return (
        <>
            <div className="flex justify-center items-center h-16 w-16 bg-primary bg-opacity-20 p-3 rounded-full">
                {icon}
            </div>
            <h2 className="text-mute">{heading}</h2>
            <h2 className="text-2xl">{totalBids}</h2>
            <p className="text-mute"><span className="text-primary">{percentage}</span> from last month</p>
        </>
    )
}
