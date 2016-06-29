var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./Place');


var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	ageRange: {
		type: Sequelize.STRING		
	}
});

Activity.belongsTo(Place);

module.exports = {Activity: Activity};