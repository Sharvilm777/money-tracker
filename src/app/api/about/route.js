import User from "@/app/models/user";
import connect_DB from "@/app/utils/DBConnect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connect_DB();
  const body = await req.json();
  const Createduser = await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
    balance: body.balance,
  });
  console.log(Createduser);
  return NextResponse.json({ message: "This page also works......" });
}
