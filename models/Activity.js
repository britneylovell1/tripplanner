var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./place');


var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	ageRange: {
		type: Sequelize.STRING		
	}
});

Activity.belongsTo(Place);

module.exports = Activity;