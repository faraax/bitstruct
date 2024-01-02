import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function GET(req, res) {
    const cookieStore = cookies();
    const token = cookieStore.get('JWT')
    // cookies().get('jwtToken').value
    console.log(token);
    return NextResponse.json(token)
}