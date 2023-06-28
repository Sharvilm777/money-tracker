const SecKey = process.env.SECERT_KEY
const jose = require('jose')
export async function middleware(req) {
    try {
        const token = req.headers.get('Authorization');
        console.log(token);
        const secret = new TextEncoder().encode(
            SecKey,
        )

        const { payload } = await jose.jwtVerify(token, secret)

        console.log(payload)
    } catch (error) {
        console.log(error)
    }



}
export const config = {
    matcher: '/api/user/login',
}