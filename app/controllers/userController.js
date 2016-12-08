/**
 * Created by romain on 2016-12-04.
 */

user.constant('apiUrl', 'https://api.wefaves.com/');

user.controller('userController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log('userController');
    var token = $cookies.get('token');
    var id = $routeParams.id;
    
    console.log($routeParams);
    //check if token is save in the session.
    if (token == null) {
        $location.path( '/signin' );
    } else {
        //user Info
        $scope.userInfoId = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/' + id,
            }).success(function (response) {
                $scope.userInfo = response;
                console.log($scope.userInfo);
            }).error(function(error) {
                console.log(error);
            })
         }
        $scope.userPatchInfo = function () {
            $http({
                method: 'PATCH',
                url: apiUrl + 'users/self',
                data: {
                    fos_user_registration_form: {
                        email: $scope.user.email,
                        username: $scope.user.username,
                        plainPassword: {
                            first: $scope.user.first,
                            second: $scope.user.second
                        }
                    }
                },
                headers: {'Authorization': 'Bearer ' + token}
            })
        }
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
                }).error(function(error) {
                    console.log(error);
                })
            }
        }
    }
});

user.controller('signinController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log('singinController');
    var token = $cookies.get('token');
    var id = $routeParams.id;
    
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
                    token = result.token;
                    console.log(token);
                    $http({
                        method: 'GET',
                        url: apiUrl + 'users/self',
                        headers: {'Authorization': 'Bearer ' + token}
                    }).success(function (response) {
                        $scope.userInfo = response;
                        console.log($scope.userInfo);
                        console.log($scope.userInfo.id);
                        $location.path( '/' + $scope.userInfo.id);
                    }).error(function(error) {
                        console.log(error);
                    })
                }).error(function(error) {
                    console.log('error :'+error.message);
                })
            }
        }
    }
});