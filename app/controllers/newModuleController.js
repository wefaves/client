/**
 * Created by romain on 2017-03-12.
 */

newModule.controller('newModuleController', function(isAuthenticated, $window) {
    console.log("newModuleController");

    if (isAuthenticated == false)
        $window.location.href = '/user#!/signin';
});
