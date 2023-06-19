import Expenses from "@/app/models/expenses";
import { NextResponse } from "next/server";
import connect_DB from "@/app/utils/DBConnect";

export async function GET(req) {
  await connect_DB();
  const userId = await req.json();
  console.log(userId);
  const expenses = await Expenses.find({ userId });
  return NextResponse.json({
    expenses,
  });
}
