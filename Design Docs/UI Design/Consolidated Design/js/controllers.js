var GcmEmeaApp = angular.module('GcmEmeaApp', []);

GcmEmeaApp.controller('DataCtrl', function ($scope, $http) {
  $http.get('data/FormData.json').success(function(data) {
    $scope.formData = data;
  });
  });
  GcmEmeaApp.controller('ctrl1',function($scope) {
  $scope.cases=[
{heading:'BILLING', ti:'', ln:'Jose', fn:'Nithin', al1:'Google Australia Pty Ltd.', al2: 'Level 5, 48 Pirrama Road', al3: 'Pyrmount', al4:'', pc:'2009', occ:'au', st:'New South Wales,Australia', cs:'Pyrmount', cn:'Google Sydney', cne:'', gt1:'121231312', mob:'123123213'},
{heading:'SHIPPING', ti:'', ln:'Jose', fn:'Nithin', al1:'Google Australia Pty Ltd.', al2: 'Level 5, 48 Pirrama Road', al3: 'Pyrmount', al4:'', pc:'2009', occ:'au', st:'New South Wales,Australia', cs:'Pyrmount', cn:'Google Sydney', cne:'', gt1:'121231312', mob:'123123213'}]

  });
  GcmEmeaApp.controller('ctrl2',function($scope) {
  $scope.fc=1;
$scope.ard='up';
$scope.clk=function(){
if($scope.fc==1)
{$scope.fc=0;}
else
{
if($scope.ard=='up')
{$scope.ard='down';}
else
{$scope.ard='up';}
//if($scope.ard=='up')
//{}
}
} });