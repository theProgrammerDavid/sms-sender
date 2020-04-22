const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NodeSchema = new Schema({
		Name: {
			type: String,
			required: false,
			select: true,
		},
		DailyLimit: {
			type: Number,
			required: true,
			select: true,
			default: -1,
		},
		secret: {
			type: String,
			required: false,
			select: true,
		},


});


module.exports = mongoose.model('Node', NodeSchema);

