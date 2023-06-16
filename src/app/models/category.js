const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: { type: String, default: "Miscellaneous" },
  allocatedAmount: { type: Number },
});
const Category =
  mongoose.models.Category || mongoose.model("Category", categoriesSchema);

module.exports = { categoriesSchema, Category };
