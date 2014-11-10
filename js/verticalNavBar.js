$(function() {
  
  ////==== Preset ====////

  // variables //
  var meterRunningState = false;
  var completeState = false;
  
  // cache //
  var $progressPoint = $('.progress-point');
  var $completePoint = $('.complete-point');
  var $btnCancel = $('.btn-cancel');

  ////==== End Preset ====////
  

  //// reset Point State ////
  function resetState(){
    $progressPoint.each( function(){
      if ( $(this).hasClass('done') ) {  
        resetAnimePointDone( $(this).children('.point')[0] );
      }
    });
    $progressPoint.removeClass('active done');    
  }
  
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
  
  ////==== Animate Objects ====////

  // Cache anime target
  var progressMeter = document.querySelector('.progress-meter');
  var progressTrack = document.querySelector('.progress');
  var $progressPoint = $('.progress-point');
  var $rightBar = $('.progress-nav');  
  
  // Animation
  var animeMeterMove = {
    timing: { delay: 1300, duration: 900, iterations: 1, fill: 'forwards', easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'}
  };

  var animeProgressTrackMove = {    
    timing: { delay: 0, duration: 900, iterations: 1, fill: 'forwards', easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'}
  };

  var animePointActiveOriginal = {
    anime: [],
    timing: {}
  };
  var animePointActive = {
    anime: [{ }],
    timing: {}
  };

  var animePointDoneOriginal = {
    anime: [
      { boxShadow: 'inset 0 0 0 0 green' }    
    ],
    timing: { delay: 0, duration: 500, iterations: 1, fill: 'forwards' } 
  }
  var animePointDone = {
    anime: [
      { boxShadow: 'inset 0 0 0 0px green' },
      { boxShadow: 'inset 0 0 0 100px green' }    
    ],
    timing: { delay: 0, duration: 500, iterations: 1, fill: 'forwards' } 
  }
  
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
    
  // Animate Done
    function startAnimePointDone(target) {
      return target.animate( animePointDone.anime, animePointDone.timing );
    }

    function resetAnimePointDone(target) {
      return target.animate( animePointDoneOriginal.anime, animePointDoneOriginal.timing );
    }


    // Get data-point
    function getPosition(e) {
      var dataPoint = $('[data-point=' + e + ']').position(); 
      return dataPoint.top ;      
    }

  ////==== End Animate Objects ====////
  

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

    // 點擊的時候切換 .point 的 .active .done .normal狀態
    function bindChangeClass() {
      $progressPoint.bind('click', function() { 
        var datapoint = $(this).data("point");


        // 移除 .active 狀態
        $progressPoint.removeClass('active');

        // 判斷哪些 point 要加上或移除 done 並執行動畫
        $progressPoint.each( function(e) {
          var done = $(this).hasClass('done');  

          if(datapoint - e <= 1 && done ){
            $(this).removeClass('done');
            resetAnimePointDone($(this).children('.point')[0]);
          } else if ( datapoint - e >= 2 && !done) {
            $(this).addClass('done');
            startAnimePointDone($(this).children('.point')[0]);
          }
        });

        // 判斷哪些point 要加上或移除 active 狀態 ( .done/ .active / 都沒有)
        var done = $(this).hasClass('done');
        var active = $(this).hasClass('active');        
        var normal = !(done || active);

        if( normal === true ){          
          $(this).addClass('active'); 
        } else if ( active === true ){ 

        } else if (done === true ){           
          $(this).addClass('active');           
        }        
        meterRunningCheck();         
      });
    }
    
  //// Active Function ////
  resetState(); 
  bindReturnPos();  
  bindReturnHome();
  bindChangeClass();
});