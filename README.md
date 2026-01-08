#  Node Lab – Movie Finder API

##  Overview
In this lab, you will build a RESTful API using Node.js and Express that fetches movie information from the OMDb API. You’ll practice setting up a server, structuring routes and controllers, handling external API requests, and managing sensitive configuration with environment variables.

##  Workplace Context
You are a junior backend developer at a startup creating a movie review website. Your first task is to provide the backend infrastructure for fetching movie data. This lab simulates real-world backend development, including API design, error handling, and external service integration.

##  Learning Objectives

By the end of this lab, you will be able to:

* Set up an Express server and organize code with routes and controllers.
* Implement RESTful endpoints following standard principles.
* Use Axios to fetch data from an external API.
* Handle query parameters and route parameters.
* Manage sensitive data using environment variables.
* Handle errors gracefully and return appropriate HTTP responses.

##  Description

This lab focuses on creating a Movie Finder API that allows users to:

* Search for movies by title.
* Retrieve detailed information about a specific movie using its IMDb ID.
* You will build a server that acts as an intermediary between a front-end client and the OMDb API.


##  Resources

* Node.js Documentation - https://nodejs.org/docs/latest/api/
* Express Documentation - https://expressjs.com
* Axios Documentation - https://axios-http.com/docs/intro
* OMDb API Documentation - http://www.omdbapi.com
* RESTful API Principles — MDN - https://developer.mozilla.org/en-US/docs/Glossary/REST

##  Getting Started

You should have a basic understanding of JavaScript and Node.js. This lab assumes no prior experience with Express is required.

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  Axios
*  dotenv

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Movie-Finder-API.git)

2. Navigate into the project folder:

cd movie-finder-api

##  Setup

1. Install dependencies:

npm install express axios dotenv

2. Create a .env file in the root and add your OMDb API key:
OMDB_API_KEY=your_key_here

3. Add .env and node_modules/ to .gitignore

4. Run the server:

node server.js

##  Project Structure
movie-finder-api/
│
├─ controllers/
│  └─ movieController.js
├─ routes/
│  └─ movieRoutes.js
├─ .env
├─ .gitignore
├─ package.json
└─ server.js