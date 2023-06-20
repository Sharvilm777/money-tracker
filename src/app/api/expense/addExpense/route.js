import Balance from "@/app/models/balance";
import Expenses from "@/app/models/expenses";
import { NextResponse } from "next/server";
import connect_DB from "@/app/utils/DBConnect";

export async function POST(req) {
  try {


    await connect_DB();
    const body = await req.json();
    const Bal = await Balance.findOne({ userId: body.userId });
    const avaliableBal = Bal.balance;
    console.log(avaliableBal);
    const expenses = await Expenses.create({
      userId: body.userId,
      budgetId: body.budgetId,
      category: body.category,
      expenseAmount: body.expenseAmount,
      Description: body.Description,
      balance: avaliableBal,
    });
    const newBal = await Balance.findOneAndUpdate(
      { userId: body.userId },
      { balance: avaliableBal - body.expenseAmount }
    );
    return NextResponse.json(
      {
        expenses,
        newBal,
        msg: "Expenses Added and Balance Update Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ error })
  }
}
