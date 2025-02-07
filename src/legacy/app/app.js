'use strict';

angular.module('legacyApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<h1>{{message}}</h1>',
                controller: 'MainController'
            })
            .when('/about', {
                template: '<h2>About Page</h2>'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

