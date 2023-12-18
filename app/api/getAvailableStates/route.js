import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function GET() {
    try {
        // let body = await req.json();
        // let token = cookies().get('jwtToken').value
        let reqOptions = {
            url: `${process.env.APIENDPOINT}api/getAvailableStates`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `JWT ${token}`
            },
            // data: JSON.stringify(body),
        }
        let { data } = await axios.request(reqOptions);
        // res.status(200)
        // return new Response.json(data)
        return NextResponse.json(data)
    }
    catch (err) {
        console.log(err);
        return NextResponse.error(err)
    }
}