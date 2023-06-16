const mongoose = require("mongoose");
const { Schema } = mongoose;

const balanceSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    balance: { type: Number, default: 0 },
    currency: { type: String, default: "INR" },
  },
  { timestamps: true }
);

const Balance =
  mongoose.models.Balance || mongoose.model("Balance", balanceSchema);
module.exports = Balance;
