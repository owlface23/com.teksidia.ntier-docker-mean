var config = {};

config.mongo = {};
config.web = {};

config.mongo.host = '192.168.99.102';
config.mongo.port = 27017;
config.web.port = process.env.PORT || 8888;

module.exports = config;
