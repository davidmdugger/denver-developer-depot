const express = require('express'),
      router = express.Router();

// @route   GET api/posts/test
// @desc    Tests a posts route
// @access  Public
router.get('/posts', (req, res) => res.json({msg: 'Dope, posts works'}));

module.exports = router;