/**
 * Created by Nick on 9/25/15.
 */
var app = angular.module('myApp', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http) {
    $scope.colors = [];

    $scope.getColors = function(){
        $http.get('/colors').then(function(res){
            $scope.colors = res.data;
            console.log(res.data);
        })
    }

    $scope.getColors();

}]);