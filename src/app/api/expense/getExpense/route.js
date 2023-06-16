import Expenses from "@/app/models/expenses";
import { NextResponse } from "next/server";
import connect_DB from "@/app/utils/DBConnect";

export async function GET(req) {
  await connect_DB();
  const userId = req.json.userId;
  const expenses = await Expenses.find({ userId });
  return NextResponse.json({
    expenses,
  });
}
