import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { cookies, headers } from 'next/headers'

export async function GET(req, res) {
    try {
        let token = cookies().get('jwtToken').value
        let reqOptions = {
            url: `${process.env.APIENDPOINT}api/getUsersProfilesList`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            }
        }
        let { data } = await axios.request(reqOptions);
        // console.log(data);
        // cookieStore.set('jwtToken', data.token)
        // return NextResponse.json({ 'data': 'token' })
        return NextResponse.json(data)
    }
    catch (err) {
        return NextResponse.error(err)
    }
}