'use strict';

/* App Module */

var kwangsanApp = angular.module('kwangsanApp', [
  'ngRoute',
  'kwangsanAnimations',
  'kwangsanControllers',
  'kwangsanFilters',
  'kwangsanServices'
]);

kwangsanApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'KwangsanListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'KwangsanDetailCtrl'
      }).
      when('/tickets',{
		  templateUrl:'partials/list.html',
		  controller:'TicketsCtrl'
		}).
      otherwise({
        redirectTo: '/tickets'
      });
  }]);
