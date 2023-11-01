"use client"
import { useAuthContext } from '@/app/hooks/useAuthContext'
import React from 'react'
import { twMerge } from 'tailwind-merge';

export default function Username({ classList, notes }) {
    const { selectedProfile } = useAuthContext();
    const mergedClass = twMerge(`text-2xl font-medium`, classList)
    return (
        <>
            {selectedProfile && <h2 className={mergedClass}>{notes}{selectedProfile.profile_name}</h2>}
        </>
    )
}
