(function() {

  angular
    .module('testApp')
    .controller('testController', testController);

  testController.$inject = ['$http', 'apiService', 'URLS'];

  function testController($http, apiService, URLS) {

    var vm = this;

    vm.message = "This is a test!";

    apiService.getServiceData().then(
      function(response) {
        vm.message = JSON.stringify(response);
      },
      function(reason) {
        vm.message = reason;
      });


  }

})();
