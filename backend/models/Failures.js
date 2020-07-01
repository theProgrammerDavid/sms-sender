const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Note: A Schema to keep track of the failed SMSs that were allotted to a person.
The system then allots them to another person.
*/
const FailureSchema = new Schema({
  EventName: {
    type: String,
    required: false,
  },
  originalSender: {
    type: String,
  },
  newSender: {
    type: String,
  },
});

module.exports = mongoose.model("Failures", FailureSchema);
