import { NextResponse } from "next/server";

const { Category } = require("@/app/models/category");
const connect_DB = require("@/app/utils/DBConnect");

export async function POST(req) {
  try {
    await connect_DB();
    const body = req.json();
    const newCategory = await Category.create({
      name: body.name,
      allocatedAmount: body.allocatedAmount,
    });

    return NextResponse.json(
      {
        message: "New Category Added Successfully",
        newCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
