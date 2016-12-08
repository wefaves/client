/**
 * Created by romain on 2016-11-27.
 */

home.controller('homeController', function($scope, $routeParams, $http) {
    console.log("homeController");
});


home.controller('menuController', function($scope, $route, $routeParams, $http, $cookies, $window, jwtHelper) {
    console.log("menuController");
    var token = $cookies.get('token')

    console.log(token);

    if (token != null) {
        var tokenPayload = jwtHelper.decodeToken(token);
        $scope.email = tokenPayload.email;
        $scope.username = tokenPayload.username;
    } else {
        console.log("redirect")
        $window.location.href = '/user';
    }

    $scope.logout = function() {
        $cookies.remove('token')
        $route.reload()
    }
});