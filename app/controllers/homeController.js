/**
 * Created by romain on 2016-11-27.
 */

home.constant('apiUrl', 'https://api.wefaves.com/');

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

home.controller('historyController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log("historyController");
    var token = $cookies.get('token');

    if (token == null) {
        $location.path( '/signin');
    } else {
        console.log("getHistoryController");
        var token = $cookies.get('token');
        console.log(token);
        var id = $routeParams.id;

        if (token == null) {
            $location.path( '/signin' );
        } else {
            $scope.getUserHistory = function () {
                $http({
                    method: 'GET',
                    url: apiUrl + 'users/self/history',
                    headers: {'Authorization': 'Bearer ' + token}
                }).success(function (response) {
                    $scope.getUserHist = response;
                    console.log($scope.getUserHist);
                    id = $scope.getUserHist.id;
                }).error(function (error) {
                    console.log(error);
                })
            }
        }

        $scope.removeHistoryById = function () {
            $http({
                method: 'DELETE',
                url: apiUrl + 'users/self/history' + id,
                headers: {'Authorization': 'Bearer ' + id}
            }).success(function (response) {
                console.log(response);
            }).error(function (error) {
                console.log(error);
            })
        }

        $scope.getHistoryById = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self/history' + id,
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (response) {
                $scope.userInfo = response;
                console.log($scope.historyInfo);
            }).error(function(error) {
                console.log(error);
            })
        }
    }
})