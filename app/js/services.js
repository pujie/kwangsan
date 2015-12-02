'use strict';

/* Services */

var kwangsanServices = angular.module('kwangsanServices', ['ngResource']);

kwangsanServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
