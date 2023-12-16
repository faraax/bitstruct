import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function POST(req, res) {
    try {
        let token = cookies().get('jwtToken').value
        let reqOptions = {
            url: `${process.env.APIENDPOINT}api/get_subscription_data`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            }
        }
        let { data } = await axios.request(reqOptions);
        return NextResponse.json(data)
    }
    catch (err) {
        return NextResponse.error(err)
    }
}