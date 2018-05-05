const express = require('express'),
      router = express.Router();

// @route   GET api/users/test
// @desc    Tests a users route
// @access    Public
router.get('/test', (req, res) => res.json({msg: 'Dope, users works'}));

module.exports = router;