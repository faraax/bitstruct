import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function GET(req, res) {
    let token = cookies().get('jwtToken').value
    try {
        let reqOptions = {
            url: `${process.env.APIENDPOINT}api/getUsersProfilesList`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            },
        }
        let resp = await axios.request(reqOptions);
        if (resp.status === 200) {
            return NextResponse.json(resp.data)
        } else {
            throw new Error(resp)
        }
    }
    catch (err) {
        return NextResponse.error(err)
    }
}