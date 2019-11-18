const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const databaseSchema = new Schema({
   uniqueid: { type: String, required: true },
    name: { type: String, required: true },
    overallgoal: { type: String, required: true },
    weeklygoal: { type: String, required: true },
    connectedfriends: { type: String, required: true },

     synopsis: String,
    date: { type: Date, default: Date.now }
  });



const database = mongoose.model("database", databaseSchema);

module.exports = database;