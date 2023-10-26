"use client"

import { useAuthContext } from '@/app/hooks/useAuthContext'
import React from 'react'
import { twMerge } from 'tailwind-merge';

export default function Username({ classList, notes }) {
    const { profiles, selectedProfile } = useAuthContext();
    const mergedClass = twMerge(`text-2xl font-medium`, classList)

    return (
        <>
            {profiles && !selectedProfile && <h2 className={mergedClass}>{notes}{profiles[0].profile_name}</h2>}
            {selectedProfile && <h2 className={mergedClass}>{notes}{selectedProfile.profile_name}</h2>}
        </>
    )
}
