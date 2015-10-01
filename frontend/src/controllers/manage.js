app.controller('manageCtrl', function ($scope, $http) {
  $scope.message = 'Enter email and password';
  $http.get('http://localhost:3000/managers/properties')
    .then(function(data) {
      console.log(data);
      $scope.propertiesList = data.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    $scope.addProp = function(property) {
      $http.post('http://localhost:3000/managers/newProperty', property)
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
    $scope.addApt = function(apartment) {
      $http.post('http://localhost:3000/managers/newProperty', apartment)
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        })
    }

});
