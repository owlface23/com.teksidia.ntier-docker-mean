(function() {
  angular
    .module('testApp')
    .factory('apiService', apiService);

  apiService.$inject = ['$http', 'URLS'];

  function apiService($http, URLS) {
    return {
      getServiceData: getServiceData,
      pushServiceData: pushServiceData
    };

    function getServiceData() {
      return $http.get(
          URLS.serviceApi)
        .then(getDataComplete)
        .catch(getDataFailed);

      function getDataComplete(response) {
        return response.data;
      }

      function getDataFailed(error) {
        //console.log('XHR Failed for getServiceData.' + error.data);
        alert('XHR Failed for getServiceData.' + error.data);
      }
    }

    function pushServiceData(newItem) {

      $http.post(URLS.serviceApi, newItem)
        .then(getDataComplete)
        .catch(getDataFailed);

      function getDataComplete(response) {
        console.log(response.data);
      }

      function getDataFailed(error) {
        console.log('XHR Failed for getServiceData.' + JSON.stringify(error));
      }

    }

  }
})();
