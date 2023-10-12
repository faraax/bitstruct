import { TiTick, TiTimes } from 'react-icons/ti'

export const pricePlans = [
    {
        id: 1,
        title: 'Basic',
        price: '$29',
        features: [
            { services: '4K Video Rendering', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Unlimited Cloud Storage', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Custom Video Templates', icon: <TiTimes key={false} className="text-white text-xl" /> },
            { services: 'Advanced Collaboration Tools', icon: <TiTimes key={false} className="text-white text-xl" /> },
            { services: 'Dedicated Support', icon: <TiTimes key={false} className="text-white text-xl" /> },
        ],
        className: 'flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between bg',
        popular: false
    },
    {
        id: 2,
        title: 'Pro',
        price: '$59',
        features: [
            { services: '4K Video Rendering', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Unlimited Cloud Storage', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Custom Video Templates', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Advanced Collaboration Tools', icon: <TiTimes key={false} className="text-white text-xl" /> },
            { services: 'Dedicated Support', icon: <TiTimes key={false} className="text-white text-xl" /> },
        ],
        className: 'relative flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between border-4 border-primary',
        popular: true
    },
    {
        id: 3,
        title: 'Enterprise',
        price: '$99',
        features: [
            { services: '4K Video Rendering', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Unlimited Cloud Storage', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Custom Video Templates', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Advanced Collaboration Tools', icon: <TiTick key={true} className="text-white text-xl" /> },
            { services: 'Dedicated Support', icon: <TiTick key={true} className="text-white text-xl" /> },
        ],
        className: 'flex flex-col p-6 bg-zinc-100 shadow-lg rounded-lg justify-between',
        popular: false
    }
];