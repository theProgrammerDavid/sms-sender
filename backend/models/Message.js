const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
		EventName: {
			type: String,
			required: true,
			select: true,
		},
		Text: {
			type: String,
			required: true,
			select: true,
		},
		Recipients: {
			type: [String],
			required: true,
			select: true,
		},
		Failures: {
			type: [String],
			required: false,
			select: false,
		},


});


module.exports = mongoose.model('Message', MessageSchema);

