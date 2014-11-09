$(function() {
  
  //// variables ////
  var meterRunningState = false;
  var completeState = false;
  
  //// cache ////
  var $progressPoint = $('.progress-point');
  var $completePoint = $('.complete-point');
  var $btnCancel = $('.btn-cancel');
  
  //// reset Point State ////
  function resetState(){
    $progressPoint.removeClass('active done');    
  }
  
  //// change Point State (when Click or ...) ////
  $progressPoint.bind('click', function() {
    var point = $(this).attr('data-point');  
    $progressPoint.removeClass('active');
    $(this).addClass('active');
    $progressPoint.each(function(e) {
      if ( point - e > 1 ){
        $(this).addClass('done');
      } else { $(this).removeClass('done')};
    })    
    meterRunningCheck();
  })
  
  //// check Meter is Runing or not ////
  function meterRunningCheck() {
    meterRunningState = $progressPoint.hasClass('done') && $progressPoint.hasClass('active');
  }
  //// check complete State ////
  function completeStateCheck() {
    if( completeState === true) { resetCompleteAnimate() } 
    completeState = $completePoint.hasClass('active');
    if( completeState === true) { startCompleteAnimate() }
  }
  
  //// hide or show Cancel Button (.btn-cancel) ////
  function hideShowBtnCancel() {
    if( meterRunningState === true ) {
      $btnCancel.show();
    } else {
      $btnCancel.hide();
    }
  }
  
  //// Animate Objects ////
  var progressMeter = document.querySelector('.progress-meter');
  var progressTrack = document.querySelector('.progress');
  var $progressPoint = $('.progress-point');
  var $rightBar = $('.progress-nav');
  
  
  var animeMeterMove = {
    timing: { delay: 1300, duration: 900, iterations: 1, fill: 'forwards', easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'}
  };
  var animeProgressTrackMove = {    
    timing: { delay: 0, duration: 900, iterations: 1, fill: 'forwards', easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'}
  };
  
  // 保存原本的STYLE
  var rightBarOriginalAnimation = {
    anime: [{ backgroundColor: $rightBar.css('background-color')}],
    timing: { delay: 0, duration: 500, iterations: 1, fill:'forwards'}
  };
  var rightBarCompleteAnimation = {
    anime: [{ backgroundColor: 'yellow'}],
    timing: { delay: 1300, duration: 700, iterations: 1, fill:'forwards'}
  };  
  
  //// Animate Function ////
  // Progress Meter move to data-point //
    function meterTranslateY(e) {
      var position = getPosition(e) - 125;
      var anime = [{transform: "translateY(" + "-" + position + "px" + ")"}];                   
      return progressMeter.animate( anime, animeMeterMove.timing );
    }
  
  // Animate Progress Track //
    function trackTransform(e) {
      var position = getPosition(e) - 0;         
      var anime= [{ height: position + "px" }];      
      return progressTrack.animate( anime, animeProgressTrackMove.timing );
    }
  
  // Animate Complete
    function startCompleteAnimate() { 
      return $rightBar[0].animate( rightBarCompleteAnimation.anime, rightBarCompleteAnimation.timing );
    }    
    function resetCompleteAnimate()   {
      return $rightBar[0].animate( rightBarOriginalAnimation.anime, rightBarOriginalAnimation.timing );
    }
  
    //// Get data-point
    function getPosition(e) {
      var dataPoint = $('[data-point=' + e + ']').position(); 
      return dataPoint.top ;      
    }
  
  //// bind Click Events ////
    function bindReturnPos() {      
      $progressPoint.on('click', function() {
        var point = $(this).attr("data-point");
        meterTranslateY(point);
        trackTransform(point);
        hideShowBtnCancel();
        completeStateCheck();
      })
    } 
    
    function bindReturnHome() {
      $('.btn-cancel').on('click', function() {
        resetState();
        meterTranslateY(1);
        trackTransform(1); 
        meterRunningCheck();
        hideShowBtnCancel();
        completeStateCheck();
      })
    }  
    
  //// Active Function ////
  resetState(); 
  bindReturnPos();  
  bindReturnHome();
});