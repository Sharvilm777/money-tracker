import User from "@/app/models/user";
import connect_DB from "@/app/utils/DBConnect";
import { NextResponse } from "next/server";



export async function GET(request) {
  try {
    const id = request.nextUrl.searchParams.get("userId");
    console.log(id)
    await connect_DB();
    const user = await User.findById({ _id: id });

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error })
  }

}