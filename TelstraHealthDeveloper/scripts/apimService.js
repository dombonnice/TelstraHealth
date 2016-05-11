'use strict';

app.factory('apimService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var apimServiceFactory = {};

    //api    
    apimServiceFactory.getAllApis = function () {
     
        /*
        var config = {
            headers: {
                'Authorization': 'SharedAccessSignature uid=56970da97daf03030d030003&ex=2016-04-13T00:40:00.0000000Z&sn=hviFjLemcBjcx1f88ExaDSUc53pj9afq34ZgcHxC1Q11iX0w+60o3wRm4BtHgX9tyRV1A4HA/oJpshpddV3DRQ=='
            }
        };

        var apiUrl = serviceBase + 'apis?api-version=2014-02-14-preview';
        console.log('apiUrl: ' + apiUrl);
        */
        return $http.get('api/apim');
    };

    return apimServiceFactory;
}]);