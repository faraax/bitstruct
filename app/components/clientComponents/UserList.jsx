"use client"
import { useAuthContext } from '@/app/hooks/useAuthContext'
import React from 'react'

export default function UserList() {
    const { profiles, dispatch, selectedProfile } = useAuthContext()

    const handleSetProfile = (list) => {
        dispatch({ type: 'SELECTEDPROFILE', payload: list })
        console.log(selectedProfile);
    }
    return (
        <>
            {
                profiles && profiles.map((list,index) => (
                    <li key={index}
                        className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20"
                        onClick={() => handleSetProfile(list)}
                    >
                        {list.profile_name}
                    </li>
                ))
            }
        </>
    )
}
