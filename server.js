// Dependencies
const express = require('express')
const fs = require('fs')


const path = require('path')
const PORT = process.env.PORT || 3001;

const app = express()

// Middleware for parsing JSON and Urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Express.static to serve static files from /public
app.use(express.static('public'))

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// HTML route for notes
