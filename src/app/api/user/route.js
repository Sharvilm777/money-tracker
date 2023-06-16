import Balance from "@/app/models/balance";
import User from "@/app/models/user";

import { NextResponse } from "next/server";

export async function POST(req) {
  await connect_DB();
  const body = req.json();
  const user = await User.findOne({ email: body.email });
  if (user) {
    return NextResponse.json(
      {
        message: "User With the email Already Exists",
      },
      {
        status: 404,
      }
    );
  }
  const newUser = await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
  });
  const UserBalance = await Balance.create({
    userId: newUser._id,
  });

  return NextResponse.json(
    {
      message: "New user is Added Succesfully and Balance Object Created",
      newUser,
      UserBalance,
    },
    {
      status: 200,
    }
  );
}
