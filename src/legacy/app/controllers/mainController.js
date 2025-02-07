'use strict';

angular.module('legacyApp')
    .controller('MainController', ['$scope', function($scope) {
        $scope.message = 'Welcome to the Legacy AngularJS Application!';
        $scope.featuredItems = [
            'Migration Strategy',
            'Hybrid Setup',
            'Component Upgrade Path',
            'Service Sharing'
        ];
    }]);

