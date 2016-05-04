
angular.module('testApp')
  .constant("URLS", {
    //"serviceApi": "http://192.168.99.100:8888/api/ServiceRequest" // local docker
    //"serviceApi": "http://localhost:8888/api/ServiceRequest" // locally via gulp
    "serviceApi": "http://13.95.145.127:8888/api/ServiceRequest" // azure vm
  });
