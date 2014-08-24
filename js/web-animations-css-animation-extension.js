// a user must write this function from scratch and can use the others
function moveText() {
    var optionSelected = "bounce";
    // var textToAnimate = document.querySelector(".ball").value;
    // var hold = document.querySelector("#textContainerText");
    // if (textToAnimate != "") {
    //     hold.innerHTML = textToAnim
    // }
    var elem = document.querySelector('.ball');
    var iterations = 1;
    window[optionSelected](elem, iterations);
}
function bounce(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(0,0,0)',
        offset: 0
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 0.2
    }, {
        transform: 'translate3d(0,-30px,0)',
        offset: 0.4
    }, {
        transform: 'translate3d(0,-30px,0)',
        offset: 0.43
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 0.53
    }, {
        transform: 'translate3d(0,-15px,0)',
        offset: 0.7
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 0.8
    }, {
        transform: 'translate3d(0,-15px,0)',
        offset: 0.9
    }, {
        transform: 'translate3d(0,0,0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return keyframes;
}

function bounceIn(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(.3, .3, .3)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1)',
        offset: 0.2
    }, {
        transform: 'scale3d(.9, .9, .9)',
        offset: 0.4
    }, {
        transform: 'scale3d(1.03, 1.03, 1.03)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'scale3d(.97, .97, .97)',
        offset: 0.8
    }, {
        transform: 'scale3d(1, 1, 1)',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return elem.animate(keyframes, timing);
}

function bounceOut(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'scale3d(.9, .9, .9)',
        opacity: '1',
        offset: 0.2
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1)',
        opacity: '1',
        offset: 0.5
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1)',
        opacity: '1',
        offset: 0.55
    }, {
        transform: 'scale3d(.3, .3, .3)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function bounceInDown(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(0, -3000px, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'translate3d(0, 25px, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'translate3d(0, -100px, 0)',
        offset: 0.75
    }, {
        transform: 'translate3d(0, 5px, 0)',
        offset: 0.9
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return elem.animate(keyframes, timing);
}

function bounceOutDown(elem, iterations) {
    var transitingTimingFunction = elem.style['transition-timing-function'];
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'translate3d(0, 50px, 0)',
        opacity: '1',
        offset: 0.2
    }, {
        transform: 'translate3d(0, -20px, 0)',
        opacity: '1',
        offset: 0.4
    }, {
        transform: 'translate3d(0, -20px, 0)',
        opacity: '1',
        offset: 0.45
    }, {
        transform: 'translate3d(0, 2000px, 0)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function bounceInUp(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(0, 3000px, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'translate3d(0, -25px, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'translate3d(0, 100px, 0)',
        offset: 0.75
    }, {
        transform: 'translate3d(0, -5px, 0)',
        offset: 0.9
    }, {
        transform: 'translate3d(0, 0, 0)',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return elem.animate(keyframes, timing);
}

function bounceOutUp(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'translate3d(0, 50px, 0)',
        opacity: '1',
        offset: 0.2
    }, {
        transform: 'translate3d(0, 20px, 0)',
        opacity: '1',
        offset: 0.4
    }, {
        transform: 'translate3d(0, 20px, 0)',
        opacity: '1',
        offset: 0.45
    }, {
        transform: 'translate3d(0, -2000px, 0)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function bounceInLeft(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(-3000px, 0, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'translate3d(25px, 0, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'translate3d(-100px, 0, 0)',
        offset: 0.75
    }, {
        transform: 'translate3d(5px, 0, 0)',
        offset: 0.9
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return elem.animate(keyframes, timing);
}

function bounceOutLeft(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'translate3d(100px, 0, 0)',
        opacity: '1',
        offset: 0.2
    }, {
        transform: 'translate3d(-20px, 0, 0)',
        opacity: '1',
        offset: 0.4
    }, {
        transform: 'translate3d(-20px, 0, 0)',
        opacity: '1',
        offset: 0.45
    }, {
        transform: 'translate3d(-2000px, 0, 0)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function bounceInRight(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(3000px, 0, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'translate3d(-25px, 0, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'translate3d(100px, 0, 0)',
        offset: 0.75
    }, {
        transform: 'translate3d(-5px, 0, 0)',
        offset: 0.9
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    };
    return elem.animate(keyframes, timing);
}

function bounceOutRight(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'translate3d(100px, 0, 0)',
        opacity: '1',
        offset: 0.2
    }, {
        transform: 'translate3d(-20px, 0, 0)',
        opacity: '1',
        offset: 0.4
    }, {
        transform: 'translate3d(-20px, 0, 0)',
        opacity: '1',
        offset: 0.45
    }, {
        transform: 'translate3d(2000px, 0, 0)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function flip(elem, iterations) {
    var keyframes = [{
        transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
        offset: 0
    }, {
        transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
        offset: 0.4
    }, {
        transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
        offset: 0.5
    }, {
        transform: 'perspective(400px) scale3d(.95, .95, .95)',
        offset: 0.8
    }, {
        transform: 'perspective(400px)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'ease-in'
    };
    return elem.animate(keyframes, timing);
}

function flipInX(elem, iterations) {
    var keyframes = [{
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        offset: 0.4
    }, {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
        opacity: '1',
        offset: 0.8
    }, {
        transform: 'perspective(400px)',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'ease-in'
    };
    return elem.animate(keyframes, timing);
}

function flipOutX(elem, iterations) {
    var keyframes = [{
        transform: 'perspective(400px)',
        opacity: '1',
        offset: 0
    }, {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        opacity: '1',
        offset: 0.3
    }, {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function flipInY(elem, iterations) {
    var animationTimingFunction = elem.style['animation-timing-function'];
    var keyframes = [{
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
        offset: 0.4
    }, {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
        opacity: '1',
        offset: 0.8
    }, {
        transform: 'perspective(400px)',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'ease-in'
    };
    return elem.animate(keyframes, timing);
}

function flipOutY(elem, iterations) {
    var keyframes = [{
        transform: 'perspective(400px)',
        opacity: '1',
        offset: 0
    }, {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
        opacity: '1',
        offset: 0.3
    }, {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function flash(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        offset: 0
    }, {
        opacity: '0',
        offset: 0.25
    }, {
        opacity: '1',
        offset: 0.5
    }, {
        opacity: '0',
        offset: 0.75
    }, {
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function pulse(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(1, 1, 1)',
        offset: 0
    }, {
        transform: 'scale3d(1.05, 1.05, 1.05)',
        offset: 0.5
    }, {
        transform: 'scale3d(1, 1, 1)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rubberBand(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(1, 1, 1)',
        offset: 0
    }, {
        transform: 'scale3d(1.25, 0.75, 1)',
        offset: 0.3
    }, {
        transform: 'scale3d(0.75, 1.25, 1)',
        offset: 0.4
    }, {
        transform: 'scale3d(1.15, 0.85, 1)',
        offset: 0.5
    }, {
        transform: 'scale3d(.95, 1.05, 1)',
        offset: 0.65
    }, {
        transform: 'scale3d(1.05, .95, 1)',
        offset: 0.75
    }, {
        transform: 'scale3d(1, 1, 1)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function lightSpeedInRight(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'skewX(20deg)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'skewX(-5deg)',
        opacity: '1',
        offset: 0.8
    }, {
        transform: 'none',
        opacity: '1 ',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function lightSpeedOutRight(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1 ',
        offset: 0
    }, {
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function lightSpeedInLeft(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'skewX(20deg)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'skewX(-5deg)',
        opacity: '1',
        offset: 0.8
    }, {
        transform: 'none',
        opacity: '1 ',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function lightSpeedOutLeft(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1 ',
        offset: 0
    }, {
        transform: 'translate3d(-100%, 0, 0) skewX(30deg)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function shake(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(0, 0, 0)',
        offset: 0
    }, {
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.1
    }, {
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.2
    }, {
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.3
    }, {
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.4
    }, {
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.5
    }, {
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.6
    }, {
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.7
    }, {
        transform: 'translate3d(10px, 0, 0)',
        offset: 0.8
    }, {
        transform: 'translate3d(-10px, 0, 0)',
        offset: 0.9
    }, {
        transform: 'translate3d(0, 0, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function swing(elem, iterations) {
    var keyframes = [{
        transform: 'translate(0%)',
        offset: 0
    }, {
        transform: 'rotate3d(0, 0, 1, 15deg)',
        offset: 0.2
    }, {
        transform: 'rotate3d(0, 0, 1, -10deg)',
        offset: 0.4
    }, {
        transform: 'rotate3d(0, 0, 1, 5deg)',
        offset: 0.6
    }, {
        transform: 'rotate3d(0, 0, 1, -5deg)',
        offset: 0.8
    }, {
        transform: 'rotate3d(0, 0, 1, 0deg)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function tada(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(1, 1, 1)',
        offset: 0
    }, {
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.1
    }, {
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.2
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.4
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.5
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.6
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.7
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.8
    }, {
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.9
    }, {
        transform: 'scale3d(1, 1, 1)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function wobble(elem, iterations) {
    var keyframes = [{
        transform: 'translate(0%)',
        offset: 0
    }, {
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        offset: 0.15
    }, {
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        offset: 0.45
    }, {
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        offset: 0.6
    }, {
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        offset: 0.75
    }, {
        transform: 'translateX(0%)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeIn(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        offset: 0
    }, {
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOut(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        offset: 0
    }, {
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInDown(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(0, -100%, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutDown(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(0, 100%, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutUp(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(0, -100%, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutUpBig(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInUp(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(0, 100%, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInDownBig(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutDownBig(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInUpBig(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInRightBig(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutLeftBig(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInLeft(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInLeftBig(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeInRight(elem, iterations) {
    var keyframes = [{
        opacity: '0',
        transform: 'translate3d(100%, 0, 0)',
        offset: 0
    }, {
        opacity: '1',
        transform: 'none',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutLeft(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutRight(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function fadeOutRightBig(elem, iterations) {
    var keyframes = [{
        opacity: '1',
        transform: 'none',
        offset: 0
    }, {
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rollIn(elem, iterations) {
    var keyframes = [{
        transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rollOut(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function zoomIn(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(.3, .3, .3)  ',
        opacity: '0',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function zoomOutDown(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        transformOrigin: 'center bottom',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
        opacity: '1',
        transformOrigin: 'center bottom',
        offset: 0.4
    }, {
        transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)',
        opacity: '0',
        transformOrigin: 'center bottom',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomOutUp(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        transformOrigin: 'center bottom',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
        opacity: '1',
        transformOrigin: 'center bottom',
        offset: 0.4
    }, {
        transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
        opacity: '0',
        transformOrigin: 'center bottom',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomOutRight(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        transformOrigin: 'right center',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)',
        opacity: '1',
        transformOrigin: 'right center',
        offset: 0.4
    }, {
        transform: 'scale(.1) translate3d(2000px, 0, 0)',
        opacity: '0',
        transformOrigin: 'right center',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomOutLeft(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        transformOrigin: 'left center',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)',
        opacity: '1',
        transformOrigin: 'left center',
        offset: 0.4
    }, {
        transform: 'scale(.1) translate3d(-2000px, 0, 0)',
        opacity: '0',
        transformOrigin: 'left center',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomInDown(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomInLeft(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function zoomInRight(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomInUp(elem, iterations) {
    var keyframes = [{
        transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)',
        opacity: '0',
        offset: 0
    }, {
        transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
        opacity: '1',
        offset: 0.6
    }, {
        transform: 'none',
        opacity: '1',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations,
        easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
    };
    return elem.animate(keyframes, timing);
}

function zoomOut(elem, iterations) {
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        offset: 0
    }, {
        transform: 'scale3d(.3, .3, .3)  ',
        opacity: '0',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateIn(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, -200deg)',
        opacity: '0',
        transformOrigin: 'center',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'center',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateInDownLeft(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0',
        transformOrigin: 'left bottom',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'left bottom',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateInDownRight(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0',
        transformOrigin: 'right bottom',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'right bottom',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateInUpLeft(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0',
        transformOrigin: 'left bottom',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'left bottom',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateInUpRight(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0',
        transformOrigin: 'right bottom',
        offset: 0
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'right bottom',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateOutDownLeft(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0',
        transformOrigin: 'left bottom',
        offset: 1
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'left bottom',
        offset: 0
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateOutDownRight(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0',
        transformOrigin: 'right bottom',
        offset: 1
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'right bottom',
        offset: 0
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateOutUpLeft(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0',
        transformOrigin: 'left bottom',
        offset: 1
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'left bottom',
        offset: 0
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateOutUpRight(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0',
        transformOrigin: 'right bottom',
        offset: 1
    }, {
        transform: 'none',
        opacity: '1',
        transformOrigin: 'right bottom',
        offset: 0
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);
}

function rotateOut(elem, iterations) {
    var transformOrigin = elem.style['transform-origin'];
    var keyframes = [{
        transform: 'none',
        opacity: '1',
        transformOrigin: 'center',
        offset: 0
    }, {
        transform: 'rotate3d(0, 0, 1, 200deg)',
        opacity: '0',
        transformOrigin: 'center',
        offset: 1
    }];
    var timing = {
        duration: 900,
        iterations: iterations
    };
    return elem.animate(keyframes, timing);

}
