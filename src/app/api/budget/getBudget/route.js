import Budget from "@/app/models/budget";
import connect_DB from "@/app/utils/DBConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {


        const userId = await req.nextUrl.searchParams.get('userId');
        await connect_DB();

        const budgets = await Budget.find({ userId: userId })

        return NextResponse.json({ budgets })
    } catch (error) {
        return NextResponse.json({ error })
    }

}