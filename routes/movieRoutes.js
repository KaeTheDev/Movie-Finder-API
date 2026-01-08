const express  = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Search Movie Results
router.get('/search', movieController.searchMovies);

// Get Movie Details
router.get('/:id', movieController.getMovieDetails);

module.exports = router;