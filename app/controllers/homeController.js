/**
 * Created by romain on 2016-11-27.
 */

home.constant('apiUrl', 'https://api.wefaves.com/');

home.controller('homeController', function(isAuthenticated, $window) {
    console.log("homeController");

    if (isAuthenticated == false)
        $window.location.href = '/user#!/signin';
});

home.controller('historyController', function(isAuthenticated, currentUser, $scope, $routeParams, $http, $location, apiUrl) {
    console.log("historyController");

    if (isAuthenticated == false) {
        $window.location.href = '/user#!/signin';
    } else {
        $scope.getUserHistory = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self/history',
                headers: {'Authorization': 'Bearer ' + currentUser.getCurrentUser().token}
            }).success(function (response) {
                $scope.history = response;
            }).error(function (error) {
                console.log(error);
            })
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
                headers: {'Authorization': 'Bearer ' + currentUser.getCurrentUser().token}
            }).success(function (response) {
                $scope.historyInfo = response;
                console.log($scope.historyInfo);
            }).error(function(error) {
                console.log(error);
            })
        }
    }
});

home.controller('bookmarksController', function(isAuthenticated, currentUser, $scope, $routeParams, $http, $location, apiUrl) {
    console.log("bookmarksController");
    var id = $routeParams.id;

    if (isAuthenticated == false) {
        $window.location.href = '/user#!/signin';
    } else {
        var user = currentUser;

        $scope.getUserBookmarks = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self/favorite',
                headers: {'Authorization': 'Bearer ' + currentUser.getCurrentUser().token}
            }).success(function (response) {
                $scope.bookmarks = response;
                console.log(response);
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
                headers: {'Authorization': 'Bearer ' + currentUser.getCurrentUser().token}
            }).success(function (response) {
                $scope.BookmarksInfo = response;
                console.log($scope.BookmarksInfo);
            }).error(function(error) {
                console.log(error);
            })
        }
    }
});

home.filter("trunc", function(){
    return function(input, length) {
        var toTrunc = input.toString();
        var trunced = toTrunc.substring(0, Math.min(length, toTrunc.length))
        return trunced;
    }
});