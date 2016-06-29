var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./Place');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 6
		}


	}

});

Restaurant.belongsTo(Place);

module.exports = {Restaurant: Restaurant};