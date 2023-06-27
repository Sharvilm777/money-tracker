import Balance from "@/app/models/balance";
import User from "@/app/models/user";
import connect_DB from "@/app/utils/DBConnect";

import { NextResponse } from "next/server";
var bcrypt = require('bcryptjs');

export async function POST(req) {
  await connect_DB();
  const body = await req.json();
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
  const salt = await bcrypt.genSalt(10);
  const securedPassword = await bcrypt.hash(body.password, salt);
  const newUser = await User.create({
    name: body.name,
    email: body.email,
    password: securedPassword,
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
      status: 201,
    }
  );
}
