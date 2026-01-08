// 1. import the express library
const express = require('express');

// 2. Create an instance of an express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// import movie Routes
const movieRoutes = require('./routes/movieRoutes');

// Dotenv - For API Key Access
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Mount the router to /api/search
app.use('/api', movieRoutes);

// Start the server and have it listen for incoming connections
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});