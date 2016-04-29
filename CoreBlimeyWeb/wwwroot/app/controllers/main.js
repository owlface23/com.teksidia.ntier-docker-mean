(function() {

  angular
    .module('testApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$http', 'apiService', 'URLS'];

  function mainController($http, apiService, URLS) {

    var vm = this;

    vm.message = "Want Service Requests? You got Service Requests!";
    vm.items = [];
    vm.newItem = {};

    vm.addServiceRequest = addServiceRequest;

    apiService.getServiceData().then(
      function(response) {
        vm.items = response;
      });

    function addServiceRequest() {
      if (isValid()) {
        vm.items.push(vm.newItem);
        apiService.pushServiceData(vm.newItem);
        vm.newItem = {};
      }

      function isValid() {
        return vm.newItem.description.length > 0 && vm.newItem.nativeReference
          .length > 0 && vm.newItem.context.length > 0;
      }
    }


  }

})();
