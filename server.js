// Dependencies
const express = require('express');
// const fs = require('fs');
// const path = require('path');
const apiRoutes = require('./routes/apiroute');
const htmlroutes = require('./routes/htmlroutes');

// Express app
const app = express();

// PORT environment variable
const PORT = process.env.PORT || 8000;

// Middleware for parsing JSON and Urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware for serving assets in the public folder
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', htmlroutes);

// Function to create server to listen 
app.listen(PORT, function() {
    console.log(`App is listening on Port ${PORT}`);
});
