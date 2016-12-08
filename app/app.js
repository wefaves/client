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
        .when('/history', {templateUrl: 'templates/users/history.html',
            controller: 'historyController'})
        .when('/', {templateUrl: 'templates/users/profile.html',
            controller: 'userController'})
        .otherwise({redirectTo: '/'});
}]);

var home = angular.module('wefaves.home', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {templateUrl: 'templates/home/home.html',
            controller: 'homeController'})
        .otherwise({redirectTo: '/'});
}]);

angular.module('wefaves', ['ngRoute', 'wefaves.home']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .otherwise({redirectTo: '/'});
}]);


