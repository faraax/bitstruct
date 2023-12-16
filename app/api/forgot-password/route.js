import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function POST(req, res) {
    try {
        let body = await req.json();
        let reqOptions = {
            url: `${process.env.APIENDPOINT}auth/forgot-password`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: body,
        }
        let { data } = await axios.request(reqOptions);
        return NextResponse.json(data)
    }
    catch (err) {
        return NextResponse.error(body)
    }
}