var express = require('express');
var router = express.Router();

// default route
router.get('/api', function(req, res) {
  res.json({
    message: 'hooray!! welcome to our api!'
  });
});

router.post('/api/test', function(req, res) {
  res.json({
    message: req.body
  });
});

router.use('/api/serviceRequest', require('./serviceRequest'));

module.exports = router;
