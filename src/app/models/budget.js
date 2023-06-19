const mongoose = require("mongoose");
const { Schema } = mongoose;
const { categoriesSchema } = require("@/app/models/category");

const budgetSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    year: { type: Number },
    month: { type: String },
    budgetAmount: { type: Number, require: true },
    categories: [categoriesSchema],
  },
  { timestamps: true }
);
const Budget = mongoose.model("Budget", budgetSchema);
module.exports = Budget;
