'use strict';

angular.module('telstraApp')
    .controller('SignupController', ['$rootScope', '$scope', '$state', 'signupService', function ($rootScope, $scope, $state, signupService) {
         
        if ($rootScope.email === undefined || $rootScope.email === '') {
            $state.go('home');
        }

        $scope.errorMessage = undefined;

        $scope.customer = {};
        $scope.customer.email = $rootScope.email;

        $scope.customer.firstName = "";
        $scope.customer.lastName = "";
        $scope.customer.jobTitle = "";
        $scope.customer.company = "";
        $scope.customer.companyAddress = "";
        $scope.customer.phone = "";
        $scope.customer.websiteAddress = "";
        $scope.customer.message = "";

        $scope.registerCustomer = function (isValid, isDirty) {
            console.log('isValid:' + isValid);
            console.log('isDirty:' + isDirty);

            if (isValid && !isDirty) {

                console.log('registering customer...');
                console.log($scope.customer);
                signupService.registerCustomer($scope.customer)
                    .then(function (data) {
                        console.log('Successfully added.');
                        console.log(data);

                        $state.go('signupSuccess');
                    }, function (error) {
                        $scope.errorMessage = error.data.Message;
                    });
            }
        }
    }]);