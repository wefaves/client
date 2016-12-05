/**
 * Created by romain on 2016-12-04.
 */

user.constant('apiUrl', 'http://api.wefaves.com/');

user.controller('userController', function($scope, $routeParams, $http, $cookies, $location) {
    console.log('userController');
    var token = $cookies.get('token')

    //check if token is save in the session.
    if (token == null) {
        $location.path( '/signin' );
    } else {
        //fill user informations.
    }
});

user.controller('signupController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log('signupController');
    var token = $cookies.get('token');

    if (token != null) {
        $location.path( '/' );
    } else {
        //check form validation
        $scope.submitForm = function(isValid) {
            if (isValid) {
                var email = $scope.email;
                var username = $scope.username;
                var password = $scope.password;

                $http({
                    method: 'POST',
                    url: apiUrl + 'users',
                    data: {
                        fos_user_registration_form: {
                                email: email,
                                username: username,
                                plainPassword: {
                                    first: password,
                                    second: password
                                }
                        }
                    }
                }).success(function (result) {
                    console.log(result);
                    $location.path( '/signin' );
                }).error(function(result) {
                    console.log(result);
                })
            }
        }
    }
});

user.controller('signinController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log('singinController');
    var token = $cookies.get('token');

    if (token != null) {
        $location.path( '/' );
    } else {
        //check form validation
        $scope.submitForm = function(isValid) {
            if (isValid) {
                var username = $scope.username;
                var password = $scope.password;

                $http({
                    method: 'POST',
                    url: apiUrl + 'login_check',
                    data: {
                        _username: username,
                        _password: password
                    }
                }).success(function (result) {
                    $cookies.put('token', result.token);
                    $location.path( '/' );
                }).error(function(error) {
                    console.log('error :'+error.message);
                })
            }
        }
    }
});