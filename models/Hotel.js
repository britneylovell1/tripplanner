var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./place');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	numStars: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 6
		}
	},
	amenities: {
		type: Sequelize.STRING
	}

});

Hotel.belongsTo(Place);

module.exports = Hotel;