'use strict';

angular.module('legacyApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/home.html',
                controller: 'MainController'
            })
            .when('/about', {
                templateUrl: 'app/templates/about.html',
                controller: 'AboutController'
            })
            .when('/contact', {
                templateUrl: 'app/templates/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/'
            });

        // Use HTML5 mode (optional)
        $locationProvider.hashPrefix('');
    }]);

