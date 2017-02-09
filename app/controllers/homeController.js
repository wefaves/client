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

    $scope.goToHistory = function() {
        $location.path('/history');
    }

    $scope.goToBookmarks = function () {
        $location.path('/bookmarks');
    }

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
                $scope.historyInfo = response;
                console.log($scope.historyInfo);
            }).error(function(error) {
                console.log(error);
            })
        }
    }
});

home.controller('bookmarksController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log("bookmarksController");
    var token = $cookies.get('token');
    var id = $routeParams.id;

    if (token != null) {
        $scope.getUserBookmarks = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self/favorite',
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (response) {
                $scope.getUserBook = response;
                console.log(response);
                id = $scope.getUserBook.id;
            }).error(function (error) {
                console.log(error);
            })
        }

        $scope.removeBookmarksById = function () {
            $http({
                method: 'DELETE',
                url: apiUrl + 'users/self/favorite' + id,
                headers: {'Authorization': 'Bearer ' + id}
            }).success(function (response) {
                console.log(response);
            }).error(function (error) {
                console.log(error);
            })
        }

        $scope.getBookmarksById = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self/favorite' + id,
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (response) {
                $scope.BookmarksInfo = response;
                console.log($scope.BookmarksInfo);
            }).error(function(error) {
                console.log(error);
            })
        }

    } else {
        //redirect to login page
        $window.location.href = '/user';
    }
});