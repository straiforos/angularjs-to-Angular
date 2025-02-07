'use strict';

angular.module('legacyApp')
    .controller('ContactController', ['$scope', function($scope) {
        $scope.contact = {
            name: '',
            email: '',
            message: ''
        };

        $scope.submitForm = function() {
            // In a real application, this would send the data to a server
            console.log('Form submitted:', $scope.contact);
            alert('Thank you for your message!');
            $scope.contact = {
                name: '',
                email: '',
                message: ''
            };
        };
    }]); 