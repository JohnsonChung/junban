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

    $scope.init = function() {
        $scope.reset();
    }

    $scope.reset = function() {
        //remove canvas storage
        window.localStorage.removeItem('drawing-board-sign-canvas');
        
        //reset sign flags
        $scope.signAnimationPlayed = false;
        $scope.signed = false;
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
    $scope.goHome = function() {
        $scope.reset();
        $scope.goto(0);
    }

    $scope.setSignAnimationPlayed = function() {
        $scope.signAnimationPlayed = true;
    };
    
    $scope.setSigned = function(signed) {
        $scope.signed = signed;
    }
});

app.controller("SignCtrl", function($scope) {
    $scope.init = function() {
        //check instruction animation played
        if ($scope.$parent.signAnimationPlayed) {
            $scope.removeAnimation();
        } else {
            $scope.$parent.setSignAnimationPlayed();
        }
    };

    $scope.removeAnimation = function() {
        $(".stylie,#svg-signature").remove();
    };

    $scope.resetSignCanvas = function() {
        $scope.signCanvas.reset({background: true});
        $scope.$parent.setSigned(false);
    };
    
    $scope.startDrawing = function() {
        $scope.removeAnimation();
        $scope.$parent.setSigned(true);
    };
    
    $scope.nextStep = function() {
        if(!$scope.$parent.signed) {
            alert("Please sign first!");
        } else {
            $scope.$parent.nextStep();
        }
    }
});

app.controller("QuestionCtrl", function($scope) {
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
});

app.directive("signCanvas", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            scope.signCanvas = new DrawingBoard.Board($(elem).attr('id'), {
                controls: false,
                webStorage: 'local',
                size: 15,
                background: false
            });

            scope.signCanvas.ev.bind("board:startDrawing", scope.startDrawing);
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