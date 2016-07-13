angular.module('routeApp').controller('BlueController', function($scope, DataService){

  $scope.data = DataService.data;

});
