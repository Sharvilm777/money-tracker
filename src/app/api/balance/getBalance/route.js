import Balance from "@/app/models/balance";
import connect_DB from "@/app/utils/DBConnect";

import { NextResponse } from "next/server";
export async function GET(req) {
  try {
    await connect_DB();
    const userId = await req.nextUrl.searchParams.get('userId');
    const AvlBalance = await Balance.findOne({ userId: userId });
    if (AvlBalance) {
      return NextResponse.json({ AvlBalance });
    } else {
      return NextResponse.json({
        message: "Balance for this user Not available",
      }, {
        status: 200
      });
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
