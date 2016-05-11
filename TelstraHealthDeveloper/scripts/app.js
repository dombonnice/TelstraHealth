'use strict'

var app = angular.module('telstraApp', [
    'ui.router',
    'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            views: {
                'contentsView': {
                    templateUrl: '/app/home/home.html',
                    controller: 'HomeController'
                },
                'dynamicView': {
                    templateUrl: '/app/signup/signup-step1.html',
                    controller: 'SignupStep1Controller'
                }
            }
        })
        .state('signup', {
            url: "/signup",
            views: {
                'dynamicView': {
                    templateUrl: "/app/signup/signup.html",
                    controller: 'SignupController'
                },
                'contentsView': {
                    templateUrl: '/app/home/home.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('signupSuccess', {
            url: "/signup-completed",
            views:{
                'dynamicView': {
                    templateUrl: "/app/signup/signupSuccess.html"
                }
            }            
        });

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
});

var serviceBase = '/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp',
    apimServiceBaseUri: 'https://thealthapi.management.azure-api.net/',
    apimDocsBaseUri: 'https://thealthapi.portal.azure-api.net'
});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.service('$', function () { return $; });

app.run([
    '$rootScope',
    'modalDialogService', function ($rootScope, modalDialogService) {
        

        $rootScope.openTermsConditionsDialog = function () {
            console.log('Opening TC dialog...');
            var modalInfoObject = {
                header: 'Terms and condtions',
                contents: 'Some text'
            };

            //opening modal dialog via service
            modalDialogService.showModal('/app/modal-dialogs/termsConditions.html',
                                                                'TermsConditionsController',
                                                                modalInfoObject);
        };

    }]);