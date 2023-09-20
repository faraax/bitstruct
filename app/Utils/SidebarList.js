import { IoStatsChart, RiSettings4Fill, BsFillGridFill, BsFillClipboard2DataFill } from './icons'

export const navTitles = [
    {
        id: 1,
        title: "Dashboard",
        icon: <BsFillGridFill />,
        url: "/dashboard"
    },
    {
        id: 2,
        title: "Activity",
        icon: <IoStatsChart />,
        url: "/activity"
    },
    {
        id: 3,
        title: "Transaction",
        icon: <BsFillClipboard2DataFill />,
        url: "/transaction"
    },
    {
        id: 4,
        title: "Settings",
        icon: <RiSettings4Fill />,
        url: "/settings"
    },

]