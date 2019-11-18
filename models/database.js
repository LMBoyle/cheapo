// Dependencies ===================================================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema =========================================================================================

const databaseSchema = new Schema({
  uniqueid: { type: String, required: true },
  name: { type: String, required: true },
  overallgoal: { type: String, required: true },
  weeklygoal: { type: String, required: true },
  connectedfriends: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
  });

const Database = mongoose.model("Database", databaseSchema);

// Export =========================================================================================

module.exports = Database;