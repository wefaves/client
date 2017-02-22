/**
 * Created by romain on 2016-11-27.
 */
'use strict';

var wefaves = angular.module('wefaves', ['LocalStorageModule'])
    .controller('wefavesController', function($scope, currentUser) {
        console.log("wefavesController");

        $scope.user = currentUser.getCurrentUser();
    });

wefaves.directive('menu', function() {
        return {
            templateUrl: 'templates/menu.html'
        };
    });

wefaves.factory('currentUser', function(localStorageService) {
        return {
            setCurrentUser: function (_user) {
                return localStorageService.set('currentUser', _user);
            },
            getCurrentUser: function () {
                return localStorageService.get('currentUser');
            },
            removeCurrentUser: function () {
                localStorageService.remove('currentUser');
            }
        }
    });

wefaves.factory('isAuthenticated', function(currentUser) {
        if (currentUser.getCurrentUser() == null)
            return false;
        else
            return true;
    });

var user = angular.module('wefaves.user', ['wefaves', 'ngRoute', 'angular-jwt']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/signin', {templateUrl: 'templates/users/signin.html',
            controller: 'signinController'})
        .when('/signup', {templateUrl: 'templates/users/signup.html',
            controller: 'signupController'})
        .when('/logout', {templateUrl: 'templates/users/profile.html',
            controller: 'logoutController'})
        .when('/', {templateUrl: 'templates/users/profile.html',
            controller: 'userController'})
        .otherwise({redirectTo: '/'});
}]);

var home = angular.module('wefaves.home', ['wefaves', 'ngRoute', 'angular-jwt']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {templateUrl: 'templates/home/home.html',
            controller: 'homeController'})
        .when('/history', {templateUrl: 'templates/home/history.html',
            controller: 'historyController'})
        .when('/bookmarks', {templateUrl: 'templates/home/bookmarks.html',
            controller: 'bookmarksController'})
        .otherwise({redirectTo: '/'});
}]);


