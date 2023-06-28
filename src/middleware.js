import { NextResponse } from 'next/server';

const SecKey = process.env.SECERT_KEY
const jose = require('jose')
export async function middleware(req) {
    try {
        const token = req.headers.get('Authorization');
        const secret = new TextEncoder().encode(
            SecKey,
        )

        const { payload } = await jose.jwtVerify(token, secret)

        console.log(payload)
        if (payload) {
            return NextResponse.next();
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 })
    }




}
export const config = {
    matcher: ['/api/user/getUser', '/api/balance/:path*', '/api/budget/:path*', '/api/expense/:path*', '/api/categories/addCategory']
}