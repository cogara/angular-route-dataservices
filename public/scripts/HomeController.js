angular.module('routeApp').controller('Home', function($scope, DataService){

  $scope.data = DataService.data;

});
