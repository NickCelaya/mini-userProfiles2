angular.module('userProfiles').controller('MainController', function($scope, mainService) {



    $scope.getUsers = function() {
        $scope.users = mainService.getUsers().then(function(param) {
            $scope.messages = param;
        })
    }


    $scope.getUsers();

});
