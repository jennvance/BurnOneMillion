var mongoose = require('mongoose')

var UltimateSchema = new mongoose.Schema({
	username: String,
	password: String,
	created: {
		type: Date,
		default: function(){return new Date() }
	},
	name: String,
	genre: String,
	bio: String,
	favorites: String,
	photo: String,
	counts: [{
		date: Date,
		words: Number
	}],
	goal: {
		date: Date,
		numwds: Number
	},
	friends: Array
})

var UltimateModel = mongoose.model('Ultimate', UltimateSchema)


module.exports = UltimateModel