"use client"
import logo from '../../public/BidStruct-Dark.png'
import Image from "next/image";
import ProfileSetup from '../components/clientComponents/ProfileSetup';
import Redirect from '../components/Redirect';
import { useAuthContext } from '../hooks/useAuthContext';


export default function SetupProfilePage() {
    const { profiles } = useAuthContext();

    return (
        <Redirect profiles={profiles}>
            <nav className="py-5 px-10 shadow-md sticky top-0 h-[10vh]">
                <div>
                    <Image
                        src={logo}
                        alt='Bit Struct-Logo'
                        placeholder='blur'
                        width={286}
                    />
                </div>
            </nav>
            <div className="h-[90vh] flex flex-col items-center justify-center gap-10">
                <ProfileSetup />
            </div>
        </Redirect>
    )
}
