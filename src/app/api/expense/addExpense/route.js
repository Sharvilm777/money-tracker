import Balance from "@/app/models/balance";
import Expenses from "@/app/models/expenses";
import { NextResponse } from "next/server";
import connect_DB from "@/app/utils/DBConnect";
import Budget from "@/app/models/budget";

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
    const budget = await Budget.findOne({ _id: body.budgetId });


    const categoryToUpdate = budget.categories.find(category => category.name === "Groceries");

    const newAllocatedAmount = categoryToUpdate.allocatedAmount - body.expenseAmount;
    const editBudget = await
      Budget.findOneAndUpdate(
        { _id: body.budgetId, "categories.name": body.category },
        { $set: { "categories.$.allocatedAmount": newAllocatedAmount } },
        { new: true }
      )

    return NextResponse.json(
      {
        expenses,
        newBal,
        editBudget,
        msg: "Expenses Added and Balance Update Successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error)
  }
}
