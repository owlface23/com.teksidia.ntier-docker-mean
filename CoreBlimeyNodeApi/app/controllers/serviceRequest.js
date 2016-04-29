var express = require('express');
var router = express.Router();
var ServiceRequest = require('../models/serviceRequest');
//var auth = require('../middlewares/auth')

// on routes that end in /serviceRequests
// ----------------------------------------------------
router.route('/')

// get all the serviceRequests (accessed at GET http://localhost:8080/api/serviceRequests)
.get(function(req, res) {
  ServiceRequest.find(function(err, serviceRequests) {
    if (err)
      res.send(err);

    res.json(serviceRequests);
  });
})

// create a serviceRequest (accessed at POST http://localhost:8080/api/serviceRequests)
.post(function(req, res) {

  var serviceRequest = new ServiceRequest(req.body); // create a new instance of the ServiceRequest model

  // save the serviceRequest and check for errors
  serviceRequest.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message: 'ServiceRequest created!' + JSON.stringify(req.body)
    });
  });

})

// delete all serviceRequests (accessed at DELETE http://localhost:8080/api/serviceRequests)
.delete(function(req, res) {
  ServiceRequest.remove({}, function(err, serviceRequest) {
    if (err)
      res.send(err);

    res.json({
      message: 'Successfully deleted all'
    });
  });
});



// on routes that end in /serviceRequests/:serviceRequest_id
// ----------------------------------------------------
router.route('/:serviceRequest_id')

// get the serviceRequest with that id (accessed at GET http://localhost:8080/api/serviceRequests/:serviceRequest_id)
.get(function(req, res) {

  ServiceRequest.findById(req.params.serviceRequest_id, function(err,
    serviceRequest) {
    if (err)
      res.send(err);
    res.json(serviceRequest);
  });

})

// update the serviceRequest with this id (accessed at PUT http://localhost:8080/api/serviceRequests/:serviceRequest_id)
.put(function(req, res) {

  // use our serviceRequest model to find the serviceRequest we want
  ServiceRequest.findById(req.params.serviceRequest_id, function(err,
    serviceRequest) {

    if (err)
      res.send(err);

    serviceRequest.name = req.body.name; // update the serviceRequests info

    // save the serviceRequest
    serviceRequest.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'ServiceRequest updated!'
      });
    });

  });
})

// delete the serviceRequest with this id (accessed at DELETE http://localhost:8080/api/serviceRequests/:serviceRequest_id)
.delete(function(req, res) {
  ServiceRequest.remove({
    _id: req.params.serviceRequest_id
  }, function(err, serviceRequest) {
    if (err)
      res.send(err);

    res.json({
      message: 'Successfully deleted'
    });
  });
});

module.exports = router;
