var GcmEmeaApp = angular.module('GcmEmeaApp', []);

GcmEmeaApp.controller('DataCtrl', function ($scope, $http) {
  $http.get('data/FormData.json').success(function(data) {
    $scope.formData = data;
  });

});