var Express = require('express');
var app = new Express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var path = require('path');
var routeHandler = require('./routes');
var bluebird = require('bluebird');
var db = require('./models');


// Swig Templeting
app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', path.join(__dirname, '/views')); // where to find the views
swig.setDefaults({ cache: false });

// Static Logging
app.use(morgan('dev'));
app.use('/bootstrap', Express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', Express.static(path.join(__dirname, '/node_modules/jquery/dist')));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', routeHandler);

// Error Handling Route
// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*handle all errors (anything passed into `next()`)*/
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    'error', { /* FILL THIS IN */ }
  );
});
	
app.listen(3000, function () {
	db.sync()
	.then(function(){
		console.log("we synched the database");
	})
	.catch(function(err){
		console.log(err);
	});
});
