import { TiTick, TiTimes } from 'react-icons/ti'

export const pricePlans = [
    {
        id: 1,
        title: 'Basic',
        price: '$79',
        features: [
            { services: 'Access to 200+ Counties', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Access to Unlimited Bid Opportunities', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Customizable Bid Reports', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Over 1,000+ Contractor Codes', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Optimized For 1 Estimator', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Filter by County, Bid Value, and Contractor Type', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Multiple Customizable Profiles', icon: <TiTimes key={false} className="text-white text-xl" /> },
        ],
        className: 'flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between',
        popular: false
    },

    {
        id: 2,
        title: 'Annual Pro',
        price: '$799',
        features: [
            { services: 'Access to 200+ Counties', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Access to Unlimited Bid Opportunities', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Customizable Bid Reports', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Over 1,000+ Contractor Codes', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Filter by County, Bid Value, and Contractor Type', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Dedicated Support', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Multiple Customizable Codes', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Saved Profile Configurations', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Multiple Customizable Profiles', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Excellent For Teams With 3+ Estimators', icon: <TiTick key={true} className="text-white text-xl" /> },
        ],
        className: 'relative flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between',
        popular: true
    },
    {
        id: 3,
        title: 'Pro',
        price: '$89',
        features: [
            { services: 'Access to 200+ Counties', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Access to Unlimited Bid Opportunities', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Customizable Bid Reports', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Over 1,000+ Contractor Codes', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Filter by County, Bid Value, and Contractor Type', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Multiple Customizable Codes', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Saved Profile Configurations', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Multiple Customizable Profiles', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Excellent For Teams With 2+ Estimators', icon: <TiTick key={true} className="text-white text-xl" /> },
        ],
        className: 'flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between',
        popular: false
    },
];