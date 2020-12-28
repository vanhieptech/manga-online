var mongoose = require('mongoose');

// tạo Schema
var seriesSchema = new mongoose.Schema({
	name: String,
//	author: String,
//	genreID: [String],
//	info: String,
//	img: [String],
//	imgDir: [String],
//	count: Number,
//	countView: Number,
}, { collection: 'series' });
//tạo model
var series = mongoose.model('series', seriesSchema);

module.exports.getAllSeries = () => {
	return series.find();
}

