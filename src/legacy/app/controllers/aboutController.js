'use strict';

angular.module('legacyApp')
    .controller('AboutController', ['$scope', function($scope) {
        $scope.companyInfo = 'We specialize in helping companies migrate their AngularJS applications to modern Angular, ensuring a smooth transition while maintaining application functionality.';
    }]); 