var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging : true
});

var Place = db.define('place', {
	address: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	state: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT)
	}
});

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

var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	ageRange: {
		type: Sequelize.STRING		
	}
});

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

Hotel.belongsTo('Place');
Restaurant.belongsTo('Place');
Activity.belongsTo('Place');

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant,
	
