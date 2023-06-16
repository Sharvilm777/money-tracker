import Balance from "@/app/models/balance";
import connect_DB from "@/app/utils/DBConnect";

import { NextResponse } from "next/server";

export async function PUT(req) {
  await connect_DB;
  const body = req.json();
  const BalObj = await Balance.findOne({ userId: body.userId });
  if (BalObj.type === "debit") {
    const updateBal = await Balance.findOneAndUpdate(
      {
        userId: newUser._id,
      },
      { balance: BalObj.balance - body.amount }
    );
  } else {
    const updateBal = await Balance.findOneAndUpdate(
      {
        userId: newUser._id,
      },
      { balance: BalObj.balance + body.amount }
    );
  }

  return NextResponse.json(
    {
      message: "Balance Updated Succesfully",
      updateBal,
    },
    {
      status: 200,
    }
  );
}
