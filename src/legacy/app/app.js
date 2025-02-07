'use strict';

angular.module('legacyApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/app/', {
                templateUrl: 'app/templates/home.html',
                controller: 'MainController'
            })
            .when('/app/about', {
                templateUrl: 'app/templates/about.html',
                controller: 'AboutController'
            })
            .when('/app/contact', {
                templateUrl: 'app/templates/contact.html',
                controller: 'ContactController'
            });

        // Use HTML5 History API
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    }]);

