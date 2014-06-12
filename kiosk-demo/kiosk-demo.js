var app = angular.module('KioskApp', ['ngTouch']);

app.controller("DemoCtrl", function($scope, signService, questionService) {
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
        
        //prevent stiky tap hover state
        if(Modernizr.touch) {
            $("body").addClass('disable-btn-hover');
        }
    }

    $scope.reset = function() {
        //remove canvas storage
        window.localStorage.removeItem('drawing-board-sign-canvas');

        signService.reset();
        
        questionService.reset();
    }

    $scope.step = 0;
    $scope.goto = function(index) {
        $scope.step = index;
        $scope.template = $scope.templates[index];
    }
    $scope.nextStep = function() {
        if($scope.step === $scope.templates.length - 1){
            $scope.goHome();
        } else {
            $scope.goto($scope.step + 1);
        }
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
    
    $scope.toggleFullscreen = function() {
        screenfull.toggle(document.documentElement);
    }

    $scope.questionService = questionService;
});

app.controller("SignCtrl", function($scope, signService) {
    $scope.init = function() {
        //check instruction animation played
        if (signService.instructionPlayed) {
            signService.removeInstruction();
        } else {
            signService.instructionPlayed = true;
        }
    };

    $scope.signService = signService;

    $scope.nextStep = function() {
        if (!signService.signed) {
            alert("Please sign first!");
        } else {
            $scope.$parent.nextStep();
        }
    }
});

app.controller("QuestionCtrl", function($scope, questionService) {
    $scope.nextStep = function() {
        if (!questionService.nextQuestion()) {
            $scope.$parent.nextStep();
        }
    };
    
    $scope.prevStep = function() {
        if (!questionService.prevQuestion()) {
            $scope.$parent.prevStep();
        }
    };
    
    $scope.hello = function(){alert(13);}
});

app.service("signService", function(){
    this.signed = false;
    this.instructionPlayed = false;
    this.canvas = null;
    
    this.removeInstruction = function() {
        $(".stylie,#svg-signature").remove();
    }
    
    var that = this;
    
    this.reset = function() {
        that.signed = that.instructionPlayed = false;
        that.resetCanvas();
    };
    
    this.resetCanvas = function() {
        that.signed = false;
        if(that.canvas !== null) {
            that.canvas.reset({background: true});
            that.bindEvents();
        }
    };
    
    this.startDrawing = function() {
        that.signed = true;
        that.removeInstruction();
    };
    
    this.bindEvents = function() {
        that.canvas.ev.bind("board:startDrawing", that.startDrawing);
    }
});

app.service("questionService", function() {
    this.index = 0;
    this.questions = [
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

    this.currentQuestion = function() {
        return this.questions[this.index];
    };

    this.isLast = function() {
        return this.index === this.questions.length - 1;
    };
    
    this.isFirst = function() {
        return this.index === 0;
    };

    this.nextQuestion = function() {
        if (this.isLast()) {
            return false;
        } else {
            this.index++;
            return true;
        }
    };
    
    this.prevQuestion = function() {
        if (this.isFirst()) {
            return false;
        } else {
            this.index--;
            return true;
        }
    }
    
    this.selectAnswer = function(answerIndex) {
        this.questions[this.index]['selected'] = answerIndex;
    };
    
    this.reset = function() {
        this.index = 0;
        for(var i in this.questions) {
            this.questions[i].selected = null;
        }
    };
});

app.directive("signCanvas", ['signService', function(signService) {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            signService.canvas = new DrawingBoard.Board($(elem).attr('id'), {
                controls: false,
                webStorage: 'local',
                size: 15,
                background: false
            });

            signService.bindEvents();
        }
    }
}]);

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