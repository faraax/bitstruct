import registration from "../../public/icons/relatedServices/Registration.svg";
import bidOpportunities from "../../public/icons/relatedServices/Bid Opportunities.svg";
import accountManagement from "../../public/icons/relatedServices/Account Management.svg";
import bidParticipation from "../../public/icons/relatedServices/Bid Participation.svg";

const relatedServices = [
    {
        id: 1,
        imageSrc: registration,
        altText: "Registration",
        title: "Registration",
        description: "Registering with BidStruct is incredibly fast and easy. You’ll be searching for bid opportunities and receiving bid notifications in no time!"
    },
    {
        id: 2,
        imageSrc: bidOpportunities,
        altText: "Bid Opportunities",
        title: "Bid Opportunities",
        description: "Search through hundreds of BidStruct's bids and bid ads. You’ll also receive email notifications of bid opportunities based on your notification criteria."
    },
    {
        id: 3,
        imageSrc: accountManagement,
        altText: "Account Management",
        title: "Account Management",
        description: "Managing all of your individual agency profiles has never been simpler! BidStruct streamlines the registration and profile maintenance process."
    },
    {
        id: 4,
        imageSrc: bidParticipation,
        altText: "Bid Participation",
        title: "Bid Participation",
        description: "Participating in a bid is just one click away! Each bid opportunity includes a link that will take you directly to the bid within the agency’s vendor portal."
    }
];

export default relatedServices;
