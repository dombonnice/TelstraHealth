'use strict';

app.factory('signupService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var signupServiceFactory = {};
    
    //api
    signupServiceFactory.registerCustomer = function (customer) {
        return $http.post(serviceBase + 'api/account/registerCustomer', customer);
    };

    return signupServiceFactory;
}]);