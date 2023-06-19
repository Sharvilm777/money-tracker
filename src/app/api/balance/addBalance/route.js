import Balance from "@/app/models/balance";
import connect_DB from "@/app/utils/DBConnect";

import { NextResponse } from "next/server";
export async function PUT(req) {
  await connect_DB();
  const body = await req.json();
  const Bal = await Balance.findOne({ userId: body.userId });
  console.log(Bal);
  const newBal = Bal.balance + body.balance;
  const updatedBal = await Balance.findOneAndUpdate(
    { _id: Bal._id },
    { balance: newBal }
  );
  return NextResponse.json(
    {
      message: "Balance Added successfully",
      updatedBal,
    },
    { status: 200 }
  );

  // Now i have to add Balance for New Created User
  // Tommorow I have just from this
  //And i have to complete Budget APis Also
  //And Test this apis also
}
