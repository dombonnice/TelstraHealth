/**
 * file: modalDialogService
 * 
 * description: Responsible for showing modal dialog
 * 
 */

'use strict';

app.factory('modalDialogService', ['$modal', function ($modal) {

    var factory = {};

    var _showModal = function (templateUrl, controllerName, modalInfoObject) {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: templateUrl, // '/apps/residentialPortal/modal-dialog/modal-content.html',
            controller: controllerName, // 'ModalCtrl',
            resolve: {
                modalInfo: function () {
                    return modalInfoObject;
                }
            }
        });

        return modalInstance;
    };

    //interface
    factory.showModal = _showModal;

    return factory;

}]);