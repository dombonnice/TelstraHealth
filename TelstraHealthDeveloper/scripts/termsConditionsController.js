'use strict';

angular.module('telstraApp').controller('TermsConditionsController', [
    '$scope',
    '$rootScope',
    '$state',
    '$modalInstance',
    'modalInfo',
    function ($scope, $rootScope, $state, $modalInstance, modalInfo) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.closeModal = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);