import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function POST(req, res) {
    try {
        let body = await req.json();
        let token = cookies().get('jwtToken').value
        let reqOptions = {
            url: `${process.env.APIENDPOINT}api/addProfile`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            },
            data: JSON.stringify(body),
        }
        let { data } = await axios.request(reqOptions);
        return NextResponse.json(data)
    }
    catch (err) {
        return NextResponse.error(err)
    }
}