import Balance from "@/app/models/balance";
import connect_DB from "@/app/utils/DBConnect";

import { NextResponse } from "next/server";

export async function PUT(req) {
  await connect_DB();

  const body = await req.json();
  const BalObj = await Balance.findOne({ userId: body.userId });
  console.log(BalObj);
  var updateBal;
  if (body.type === "debit") {
    updateBal = await Balance.findOneAndUpdate(
      {
        userId: body.userId,
      },
      { balance: BalObj.balance - body.amount }
    );
  } else {
    updateBal = await Balance.findOneAndUpdate(
      {
        userId: body.userId,
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
