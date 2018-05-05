const express = require('express'),
      router = express.Router();

// @route   GET api/profile/test
// @desc    Tests a profile route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Dope, profile works'}));

module.exports = router;