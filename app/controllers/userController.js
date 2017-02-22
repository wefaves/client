/**
 * Created by romain on 2016-12-04.
 */

user.constant('apiUrl', 'https://api.wefaves.com/');

user.controller('userController', function(isAuthenticated, currentUser, $scope, $http, $window, apiUrl) {
    console.log('userController');

    if (isAuthenticated == false) {
        $window.location.href = '/user#!/signin';
    } else {
        $scope.userInfo = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self',
                headers: {'Authorization': 'Bearer ' + currentUser.getCurrentUser().token}
            }).success(function (response) {
                $scope.userInfo = response;
                console.log($scope.userInfo);
            }).error(function(error) {
                console.log(error);
            })
        }

        $scope.userPatchInfo = function(user) {
            $http({
                method: 'PATCH',
                url: apiUrl + 'users/self',
                data: {
                    fos_user_profile_form: {
                        username: user.username,
                        email: user.email,
                        current_password: user.first
                    }
                },
                headers: {'Authorization': 'Bearer ' + currentUser.getCurrentUser().token}
            }).success(function(response) {
                console.log(response)
            }).error(function(error) {
                console.log(error)
            })
        }
    }
});

user.controller('signupController', function(isAuthenticated, $scope, $http, $window, apiUrl) {
    console.log('signupController');

    if (isAuthenticated == true) {
        $window.location.href = '/!#/';
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
                }).success(function () {
                    $window.location.href = '/user#!/signin';
                }).error(function(error) {
                    console.log(error);
                })
            }
        }
    }
});

user.controller('signinController', function(isAuthenticated, currentUser, $scope, $routeParams, $http, $window, apiUrl) {
    console.log('singinController');

    if (isAuthenticated == true) {
        $window.location.href = '/#!/';
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
                    var token = result.token;

                    $http({
                        method: 'GET',
                        url: apiUrl + 'users/self',
                        headers: {'Authorization': 'Bearer ' + token}
                    }).success(function (response) {
                        response["token"] = token;
                        currentUser.setCurrentUser(response);
                        $window.location.href = '/#!/';
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

user.controller('logoutController', function(isAuthenticated, currentUser, $scope, $route, $routeParams, $http, $window) {
    console.log("logoutController");

    if (isAuthenticated == false) {
        $window.location.href = '/user#!/signin';
    } else {
        currentUser.removeCurrentUser();
        $window.location.href = '/#!/';
    }
});