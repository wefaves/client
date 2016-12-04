/**
 * Created by romain on 2016-11-27.
 */
'use strict';

var user = angular.module('wefaves.user', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/signup', {templateUrl: 'templates/users/signup.html',
            controller: 'signupController'})
        .when('/', {templateUrl: 'templates/users/profile.html',
            controller: 'userController'})
        .otherwise({redirectTo: '/templates/users/profile.html'});
}]);

var home = angular.module('wefaves.home', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {templateUrl: 'templates/home/home.html',
            controller: 'homeController'})
        .otherwise({redirectTo: '/templates/home/home.html'});
}]);

angular.module('wefaves', ['ngRoute', 'wefaves.home']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .otherwise({redirectTo: '/templates/home/home.html'});
}]);


