var app = angular.module('KioskApp', ['ngTouch']);

app.controller("DemoCtrl", function($scope) {
    $scope.templates = [
        {
            name: 'home',
            url: 'kiosk-demo/template-customer-1.html'
        },
        {
            name: 'sign',
            url: 'kiosk-demo/template-customer-2.html'
        },
        {
            name: 'question',
            url: 'kiosk-demo/template-customer-3.html'
        }
    ];
    $scope.template = $scope.templates[0];

    $scope.parties = 0;

    $scope.question_index = 0;
    $scope.questions = [
        {
            question: "Question A",
            answers: [
                "A", "B", "C", "D", "E", "F", "G"
            ]
        },
        {
            question: "Question B",
            answers: [
                "H", "I", "J", "K"
            ]
        }
    ];
    $scope.nextQuestion = function() {
        if ($scope.question_index == $scope.questions.length - 1) {
            $scope.nextStep();
        } else {
            $scope.question_index++;
        }
    }

    $scope.init = function() {
    }

    $scope.step = 0;
    $scope.goto = function(index) {
        $scope.step = index;
        $scope.template = $scope.templates[index];
    }
    $scope.nextStep = function() {
        $scope.goto($scope.step + 1);
    }
    $scope.prevStep = function() {
        $scope.goto($scope.step - 1);
    }
});

app.controller("signCtrl", function($scope) {
    $scope.init = function() {

    };
    
    $scope.removeAnimation = function() {
        $(".stylie,#svg-signature").remove();
    };
});

app.directive("signCanvas", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var simpleBoard = new DrawingBoard.Board($(elem).attr('id'), {
                controls: false,
                webStorage: false,
                size: 15
            });
            console.log(simpleBoard);
        }
    }
});

app.directive("stepIndicator", function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            scope.$watch('template', function() {
                if (scope.template.name == $(elem).attr('name')) {
                    $(elem).addClass('active')
                } else {
                    $(elem).removeClass('active')
                }
            });
        }
    };
});