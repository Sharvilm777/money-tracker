import Budget from "@/app/models/budget";
import { NextResponse } from "next/server";


const connect_DB = require("@/app/utils/DBConnect");

export async function PUT(req) {
  try {
    await connect_DB();
    const body = await req.json();
    const newCategory = {
      name: body.name,
      allocatedAmount: body.allocatedAmount,
    }
    const updateCategories = await Budget.findOneAndUpdate({ _id: body.budgetId }, { $push: { categories: newCategory } }, { new: true })

    return NextResponse.json(
      {
        message: "New Category added to Budget Successfully",
        updateCategories,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
