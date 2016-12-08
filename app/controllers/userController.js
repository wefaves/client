/**
 * Created by romain on 2016-12-04.
 */

user.constant('apiUrl', 'https://api.wefaves.com/');

user.controller('userController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log('userController');
    var token = $cookies.get('token');

    $scope.go = function() {
   $location.path('/history');
   }
    
    //check if token is save in the session.
    if (token == null) {
        $location.path( '/signin' );
    } else {
        //user Info
        $scope.userInfo = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self',
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (response) {
                $scope.userInfo = response;
                console.log($scope.userInfo);
            }).error(function(error) {
                console.log(error);
            })
         }

        $scope.userPatchInfo = function(user) {
            var edited = [];

//            edited.push({'username': user.username})
//            console.log(user.username);

//            if (user.first != null && user.first == user.second) {
//                edited.push({'current_password': user.first
////                        second: user.second
//                    })
//                }
//            
//            if (user.email != null) {
//                edited.push({'email': user.email})
//            }
//            if (edited.length) {
            console.log(user.first);
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
                    headers: {'Authorization': 'Bearer ' + token}
                }).success(function(response) {
                    console.log(response)
                }).error(function(error) {
                    console.log(error)
                })
//            }
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

// à mettre dans le homme je pense plus logique il faut voir comment l'intégrer
// comment récupérer toutes les info de la meilleur manière

user.controller('historyController', function($scope, $routeParams, $http, $cookies, apiUrl) {
    console.log("historyController");
    var token = $cookies.get('token');
    var id = $routeParams.id;
    
    if (token != null) {
        $location.path( '/signin');
    } else {
        $scope.historySave =function () {
            $http({
                method:'POST',
                url: apiUrl + 'users/self/history',
                data: {
                    title: "test",
                    lastVisit: "08/12/2016",
                    typedCount: "0",
                    url: "https://test.wefawes/test",
                    visitCount: "3"
                },
                headers: {'Authorizatio': 'Bearer ' + token}
            }).success(function (response) {
                $scope.saveHist = response;
                console.log(saveHist);
            }).error(function (error) {
                console.log(error);
            })
        }
    }
})

// GET the whole history of the user

user.controller('getHistoryController', function($scope, $routeParams, $http, $cookies, $location, apiUrl) {
    console.log("getHistoryController");
    var token = $cookies.get('token');
    console.log(token);
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
});

// GET, DELETE a single user history with id

user.controller('manageHistoryController', function($scope, $routeParams, $http, $cookies, apiUrl) {
    console.log("manageHistoryController");
    var token = $cookies.get('token');
    var id = $routeParams.id;
    
     if (token == null) {
        $location.path( '/signin' );
    } else {
        $scope.getHistoryById = function () {
            $http({
                method: 'GET',
                url: apiUrl + 'users/self/history' + id,
                headers: {'Authorization': 'Bearer ' + token}
            }).success(function (response) {
                $scope.userInfo = response;
                console.log($scope.historyInfo);
            }).error(function(error) {
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
    }
});