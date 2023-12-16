import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function POST(req, res) {
    try {
        let body = await req.json();
        let reqOptions = {
            url: `${process.env.APIENDPOINT}auth/register`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(body),
        }
        let { data } = await axios.request(reqOptions);
        // cookieStore.set('jwtToken', data.token)
        return NextResponse.json(data)
    }
    catch (err) {
        return NextResponse.error(err)
    }
}

// export async function GET(req, res) {
//     let getCookie = cookies().get('jwtToken').value
//     return NextResponse.json(getCookie)
// }