import { NextResponse } from "next/server";

const Budget = require("@/app/models/budget");
const connect_DB = require("@/app/utils/DBConnect");

export async function POST(req) {
  try {
    await connect_DB();
    const body = await req.json();

    const newBudget = await Budget.create({
      userId: body.userId,
      year: body.year,
      month: body.month,
      budgetAmount: body.budgetAmount,
      categories: body.categories,
    });
    return NextResponse.json(
      {
        message: "New budget for this Month",
        newBudget,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({ msg: error })
  }
}
