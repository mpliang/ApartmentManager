app.controller('propCtrl', function ($scope, $http) {

  $http.get('http://localhost:3000/managers/properties/' + propertyId)
    .then(function(data) {
      console.log(data);
      $scope.propertiesList = data.data;
    })
    .catch(function(error) {
      console.log(error);
    })

});
