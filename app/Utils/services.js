import bidOpportunities from "../../public/icons/services/Bid Opportunities.svg";
import businessGrowth from "../../public/icons/services/Business Growth.svg";
import maximizingEfficiency from "../../public/icons/services/Maximizing Efficiency.svg";
import centralBidsManagement from "../../public/icons/services/Central Bids Management.svg";
import subcontractingOpportunities from "../../public/icons/services/Subcontracting Opportunities.svg";
import localBids from "../../public/icons/services/Local Bids and RFPs.svg";
import bidParticipation from "../../public/icons/services/Bid Participation.svg";
import governmentContracts from "../../public/icons/services/Government Contracts.svg";
import { BsArrowDownCircle } from "../Utils/icons";



const services = [
    {
        id: 1,
        src: bidOpportunities,
        alt: "Bid Opportunities",
        text: "Bid Opportunities",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 2,
        src: businessGrowth,
        alt: "Business Growth",
        text: "Business Growth",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 3,
        src: maximizingEfficiency,
        alt: "Maximizing Efficiency",
        text: "Maximizing Efficiency",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 4,
        src: centralBidsManagement,
        alt: "Central Bids Management",
        text: "Central Bids Management",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 5,
        src: subcontractingOpportunities,
        alt: "Subcontracting Opportunities",
        text: "Subcontracting Opportunities",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 6,
        src: localBids,
        alt: "Local Bids and RFPs",
        text: "Local Bids and RFPs",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 7,
        src: bidParticipation,
        alt: "Bid Participation",
        text: "Bid Participation",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
    {
        id: 8,
        src: governmentContracts,
        alt: "Government Contracts.svg",
        text: "Government Contracts",
        icon: <BsArrowDownCircle className="text-white text-4xl" />,
    },
];

export default services;
