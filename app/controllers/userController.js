/**
 * Created by romain on 2016-12-04.
 */

user.controller('userController', function($scope, $routeParams, $http, $cookies, $location) {
    console.log("userController");
    var token = $cookies.get('token')

    //check if token is save in the session.
    if (token == null) {
        $location.path( "/signin" );
    } else {
        //fill user informations.
    }
});

user.controller('signupController', function($scope, $routeParams, $http) {
    console.log("signupController");

    //check form validation
    $scope.submitForm = function(isValid) {
        if (isValid) {
            //send loggin request
        }
    }
});

user.controller('signinController', function($scope, $routeParams, $http) {
    console.log("singinController");

    //check form validation
    $scope.submitForm = function(isValid) {
        if (isValid) {
            //send loggin request
        } else {
            //show error message(s)

            //check if email is valide else print error message
            if (!$scope.userForm.email.$valid) {

            }
        }
    }
});