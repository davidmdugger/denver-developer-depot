const express = require('express'),
      router = express.Router();

// @route   GET api/posts/test
// @desc    Tests a posts route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Dope, posts works'}));

module.exports = router;