// 1. import the express library
const express = require('express');

// Node.js 'path' module
import path from 'path';

// Dotenv - For API Key Access
const dotenv = require('dotenv');

// 2. Create an instance of an express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// Start the server and have it listen for incoming connections
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});