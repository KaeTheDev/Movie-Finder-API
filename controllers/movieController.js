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
                search: title,
                apiKey: process.env.OMDB_API_KEY,
            },
        });

        // send response back to client
        res.json(response.data);
    } catch(error) {
        console.error('OMDb API error:', error.message);

        res.status(500).json({
            error: 'Failed to fetch movies',
        });
    }
};

module.exports = { searchMovies };