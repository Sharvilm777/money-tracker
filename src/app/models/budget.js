const mongoose = require("mongoose");
const { Schema } = mongoose;


const budgetSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    year: { type: Number },
    month: { type: String },
    budgetAmount: { type: Number, require: true },
    categories: [{
      name: { type: String, required: true },
      allocatedAmount: { type: Number, required: true },
    }],
  },
  { timestamps: true }
);
const Budget = mongoose.models.Budget || mongoose.model("Budget", budgetSchema);
module.exports = Budget;
