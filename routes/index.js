var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var Activity = require('../models/activity');
var Hotel = require('../models/hotel');
var Place = require('../models/place');
var Restaurant = require('../models/restaurant');

module.exports = router;

router.get(function(req, res, next) {
	// render the index.html page
	Promise.all([
		Activity.findAll(),
		Hotel.findAll(),
		Place.findAll(),
		Restaurant.findAll()
	])
	.then(function(activities, hotels, places, restaurants) {
		res.render('index', {
			activties: activities,
			hotels: hotels,
			places: places,
			restaurants: restaurants
		})
	})
	.catch(next);
})
