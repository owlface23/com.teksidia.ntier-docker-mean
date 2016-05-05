var config = {};

config.mongo = {};
config.web = {};

config.mongo.host = 'data';
config.mongo.port = 27017;
config.web.port = process.env.PORT || 8888;

module.exports = config;
