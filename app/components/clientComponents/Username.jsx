"use client"

import { useAuthContext } from '@/app/hooks/useAuthContext'
import React from 'react'

export default function Username() {
    const { user } = useAuthContext()
    return <h2 className="text-2xl font-medium">Welcome {user.email}</h2>
}
