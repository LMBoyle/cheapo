// Dependencies ===================================================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema =========================================================================================

const goalSchema = new Schema({
  goalName: { type: String, required: true },
  totalAmt: { type: Number, required: true },
  weeklyAmt: { type: Number, required: true },
});

const Goal = mongoose.model("Goal", goalSchema);

// Export =========================================================================================

module.exports = Goal;
