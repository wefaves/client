/**
 * Created by romain on 2016-11-27.
 */

home.controller('homeController', function($scope, $routeParams, $http) {
    console.log("homeController");
});


home.controller('menuController', function($scope, $routeParams, $http, $cookies, jwtHelper) {
    console.log("menuController");
    var token = $cookies.get('token')
    var tokenPayload = jwtHelper.decodeToken(token);

    $scope.email = tokenPayload.email;
    $scope.username = tokenPayload.username;
});