import businessGrowth from "../../public/icons/StepsIcon/Business Growth.svg";
import saveTime from "../../public/icons/StepsIcon/Save Time.svg";
import fastandEasy from "../../public/icons/StepsIcon/Fast and Easy.svg";
import secure from "../../public/icons/StepsIcon/Secure.svg";

const keyBenefits = [
    {
        id: 1,
        heading: "Grow Your Business",
        altText: "Grow Your Business",
        imgSrc: businessGrowth,
        paragraph: "BidStruct grows your business by connecting you with bid opportunities and exposing your company to buyers and primes.",
    },
    {
        id: 2,
        heading: "Save Time",
        altText: "Save Time",
        imgSrc: saveTime,
        paragraph: "BidStruct search mechanism allows you to quickly locate and participate in the bids that are relevant to your business.",
    },
    {
        id: 3,
        heading: "Fast and Easy",
        altText: "Fast and Easy",
        imgSrc: fastandEasy,
        paragraph: "Our intuitive user interface minimizes the time it takes to search for bids, participate in projects, and register with agencies.",
    },
    {
        id: 4,
        heading: "Secure",
        altText: "Secure",
        imgSrc: secure,
        paragraph: "BidStruct is designed to keep your information secure and prevent unauthorized use of your profile.",
    }
]

module.exports = keyBenefits