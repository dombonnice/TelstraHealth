'use strict';

angular.module('telstraApp')
    .controller('HomeController', ['$rootScope', '$scope', '$state', 'ngAuthSettings', 'apimService', 'modalDialogService', '$window',
        function ($rootScope, $scope, $state, ngAuthSettings, apimService, modalDialogService, $window) {
            console.log('In HomeController');

            $scope.baseUrl = ngAuthSettings.apimDocsBaseUri;
            $scope.topClinicalApis = new Array();
            $scope.topConsumerApis = new Array();

            $scope.currentSelection = undefined; //possible values: Clinical, Consumer
            $scope.setSelection = function (selectionName) {
                $scope.currentSelection = selectionName;
                console.log(selectionName);
            };

            var populateClinicalAPIs = function () {
                $scope.topClinicalApis.push({
                    name: "Pharmacy Profile API",
                    description: "Send and receive medication, profiles and messages from your pharmacy application",
                    iconUrl: '/Content/app/images/clinical-apis/icon-01.jpg'
                });

                $scope.topClinicalApis.push({
                    name: "Patient Flow API",
                    description: "Consume patient process information across inpatient, emergency and theatre",
                    iconUrl: '/Content/app/images/clinical-apis/icon-02.jpg'
                });

                $scope.topClinicalApis.push({
                    name: "Work Tracker API",
                    description: "Search, retrieve and maintain your organisation and it's workforce in a few steps",
                    iconUrl: '/Content/app/images/clinical-apis/icon-03.jpg'
                });

                $scope.topClinicalApis.push({
                    name: "Customer Update API",
                    description: "Easily modify or receive new customers from SAP, and auto update your CRM",
                    iconUrl: '/Content/app/images/clinical-apis/icon-04.jpg'
                });
            };

            var populateConsumerAPIs = function () {
                $scope.topConsumerApis.push({
                    name: "Export Patient Data (OSR)",
                    description: "Export relevant patient measurements (OSR) to third party data analysis tools",
                    iconUrl: '/Content/app/images/consumer-apis/export.png'
                });

                $scope.topConsumerApis.push({
                    name: "Patient SMS",
                    description: "Allows customers to send text messages to patients",
                    iconUrl: '/Content/app/images/consumer-apis/sms.jpg'
                });

                $scope.topConsumerApis.push({
                    name: "Secure document transfer",
                    description: "Securely send & receive letters, referrals, CDA docs and receive Pathology and Radiology results",
                    iconUrl: '/Content/app/images/consumer-apis/secure-doc.jpg'
                });

                $scope.topConsumerApis.push({
                    name: "Schedule Visit",
                    description: "Schedule and record data about home care visits – home care mobile specific",
                    iconUrl: '/Content/app/images/consumer-apis/calendar.jpg'
                });
            };

            $scope.next = function () {
                console.log('email: ' + $scope.email);
                $rootScope.email = $scope.email;
                $state.go('signup-step2');
            };

            //opening modal dialog
            $scope.showTermsConditions = function () {

                var modalInfoObject = {
                    header: 'Terms and condtions',
                    contents: 'Some text'
                };

                //opening modal dialog via service
                modalDialogService.showModal('/app/modal-dialogs/termsConditions.html',
                                                                    'TermsConditionsController',
                                                                    modalInfoObject);
            };


            var init = function () {
                populateClinicalAPIs();
                populateConsumerAPIs();
                $scope.currentSelection = 'Consumer';
            };

            init();
            
        }]);