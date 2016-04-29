describe('app', function() {

  beforeEach(module('testApp'));

  var $controller, scope;

  // inject in our angular-mock helpers ready for use in our tests
  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  describe('GIVEN mainController', function() {

    // --- SETUP ---

    beforeEach(function() {

      var apiServiceStub = {
        getServiceData: function() {
          return $q.when([{
            "description": "I saw a rat",
            "context": "Pest Control",
            "nativeReference": "123/456"
          }]);
        }
      };

      controller = $controller('mainController', {
        $scope: scope,
        apiService: apiServiceStub,
        URLS: {}
      });

    });

    // --- TESTS ---

    describe('WHEN initialised', function() {

      it('THEN sets message correctly', function() {
        expect(controller.message).to.equal(
          'Want Service Requests? You got Service Requests!');
      });

      it('THEN gets service requests (via apiService)', function() {
        // digest fires the watchers and updates 2-way-binding
        // including triggering our promise responses
        $rootScope.$digest();
        expect(controller.items[0].description).to.equal(
          'I saw a rat');
      });

    });


  });

});
