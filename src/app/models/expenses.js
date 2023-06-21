const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  budgetId: { type: mongoose.Types.ObjectId, ref: "Budget" },
  category: { type: String, ref: "Category" },
  expenseAmount: { type: Number },
  Description: { type: String },
  balance: { type: Number },
}, { timestamps: true });

const Expenses =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
module.exports = Expenses;
