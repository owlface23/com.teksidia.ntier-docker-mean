var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceRequestSchema = new Schema({
  description: String,
  context: String,
  nativeReference: String
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);
