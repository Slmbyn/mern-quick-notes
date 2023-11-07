const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));

 const port = process.env.PORT || 3001;


// PUT API ROUTES HERE!, BEFORE THE 'CATCH ALL' ROUTE!!


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    // pretty much creates the path './build/index.html' and routes the initial req (the user going to our webapp) to that page
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });

//Note: Update the production code on port 3001 by running 'npm run build'