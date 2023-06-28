import { NextResponse } from "next/server";

const User = require("@/app/models/user");
const connect_DB = require("@/app/utils/DBConnect");
const bcryptjs = require('bcryptjs')
const jwt = require('jose');
const SecKey = process.env.SECERT_KEY;

export async function POST(req) {
    try {
        const body = await req.json();
        await connect_DB();
        const user = await User.findOne({ email: body.email });

        const secret = new TextEncoder().encode(
            SecKey,
        )


        if (await bcryptjs.compare(body.password, user.password)) {

            const alg = 'HS256'

            const jwtToken = await new jwt.SignJWT({ user: user._id, name: user.name })
                .setProtectedHeader({ alg })
                .setIssuedAt()
                .setExpirationTime('2h')
                .sign(secret)
            return NextResponse.json({ msg: "Password is correct and Your Secert key is generated", jwtToken })

        } else {
            return NextResponse.json({ msg: "Password is incorrect u can go for jwt tokens" })
        }

    } catch (error) {
        console.log(error);

    }


}