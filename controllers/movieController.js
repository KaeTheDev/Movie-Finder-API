const axios = require('axios');


// SEARCH MOVIES
const searchMovies = async(req, res) => {
    const { title } = req.query;

    // 1. Validation
    if(!title) {
        return res.status(400).json({
            error: 'Title query parameter is required'
        });
    }

    try {
        // Call OMDb API
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY,
            },
        });

        // send response back to client
        res.json(response.data);
    } catch(error) {
        console.error('OMDb API error:', error.response?.data || error.message);

        res.status(500).json({
            error: 'Failed to fetch movies',
        });
    }
};

// SEARCH MOVIE DETAILS
const getMovieDetails = async(req, res) => {
    const { id } = req.query;

    // 1. Validation
    if(!id) {
        return res.status(400).json({
            error: 'Id query parameter is required'
        });
    }

    try {
        // Call OMDb API
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY, 
            },
        });

        // send response back to client
        res.json(response.data);
    } catch(error) {
        console.error('OMDb API error:', error.response?.data || error.message);

        res.status(500).json({
            error: 'Failed to fetch movie details'
        });
    }
};

module.exports = { searchMovies, getMovieDetails };