/**
 * Created by romain on 2016-11-27.
 */

home.controller('homeController', function($scope, $routeParams, $http) {
    console.log("homeController");
});


home.controller('menuController', function($scope, $route, $routeParams, $http, $cookies, $window, jwtHelper) {
    console.log("menuController");
    var token = $cookies.get('token')

    if (token != null) {
        var tokenPayload = jwtHelper.decodeToken(token);
        $scope.email = tokenPayload.email;
        $scope.username = tokenPayload.username;

        $scope.logout = function() {
            $window.location.href = '/user';
            $cookies.remove('token')
            $route.reload()
        }
    } else {
        $window.location.href = '/user';
    }
});