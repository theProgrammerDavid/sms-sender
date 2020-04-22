const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Note: This schema is redundant when this project gets intergrated with theoAuth service of your choice.

When such an integration is made, the service needs these three parameters (Names are not important)
so you can possibly use your existing Mongo Collections that contain these three parameters
*/
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

