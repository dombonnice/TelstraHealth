'use strict';

angular.module('telstraApp')
    .controller('SignupStep1Controller', ['$rootScope', '$scope', '$state', 'signupService',
        function ($rootScope, $scope, $state, signupService) {

        $scope.errorMessage = undefined;
        $scope.email = "";
        
        $scope.next = function () {
            console.log('email: ' + $scope.email);
            $rootScope.email = $scope.email;
            $state.go('signup');
        };
    }]);