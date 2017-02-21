/**
 * Created by romain on 2016-11-27.
 */
'use strict';

var user = angular.module('wefaves.user', ['ngRoute', 'ngCookies', 'angular-jwt']).
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

var home = angular.module('wefaves.home', ['ngRoute', 'ngCookies', 'angular-jwt']).
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

angular.module('wefaves', ['ngRoute', 'wefaves.home']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .otherwise({redirectTo: '/'});
}]);

