import Balance from "@/app/models/balance";
import connect_DB from "@/app/utils/DBConnect";

import { NextResponse } from "next/server";
export async function GET(req) {
  await connect_DB();
  console.log(req);
  // const AvlBalance = await Balance.findOne({ userId: userId });
  // if (AvlBalance) {
  //   return NextResponse.json({ AvlBalance });
  // } else {
  //   return NextResponse.json({
  //     message: "Balance for this user Not available",
  //   });
  // }
}
