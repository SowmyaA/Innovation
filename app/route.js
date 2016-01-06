// Routing for single page application
(function () {
    'use strict';
    var app = angular.module("HMSApp", ['ngRoute']);

    app.config(function ($routeProvider) {
        //Default page
        $routeProvider.when('/', {
            templateUrl: '/app/Pages/WelcomePage.html',
            controller: 'WelcomePage'
        })
        //Women Literacy page
        $routeProvider.when('/QuckFacts', {
            templateUrl: '/app/Pages/QuckFacts.html',
            controller: 'QuckFacts'
        })
        //Literacy Data page
        $routeProvider.when('/CultureCoach', {
            templateUrl: '/app/Pages/CultureCoach.html',
            controller: 'CultureCoach'
        })
        //Children Malnutrition page
        $routeProvider.when('/SmartTalent', {
            templateUrl: '/app/Pages/SmartTalent.html',
            controller: ''
        })
        
  .otherwise({ redirectTo: '/' });

    });

})();