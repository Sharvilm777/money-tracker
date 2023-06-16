import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-around m-4">
        <div className="heading text-xl text-bold">Money Tracker</div>
        <div className="items ">
          <Link className="mx-4 hover:underline" href={"/about"}>
            Dashboard
          </Link>
          <Link className="mx-4  hover:underline" href={"/accounts"}>
            Accounts
          </Link>
          <Link className="mx-4 hover:underline" href={"/transactions"}>
            Transactions
          </Link>
        </div>
        <div className="buttons mx-4 border-2 rounded-md px-4 py-2">
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
