$(function() {

  // popup handlers

  $('.popup-btn').click(function() {
    $('.popup').toggleClass('flipped');
    $('.mask').toggleClass('success');
  });

  $('.staging__btn').click(function(){
    $('.mask').fadeIn();
    $('.popup').fadeIn();
  });

  $('.close-btn').click(function(){
    $('.popup').removeClass('flipped');
    $('.mask').removeClass('success');

    $('.mask').fadeOut();
    $('.popup').fadeOut();
  });

  $("#input-control").keyup(function(){
    var count = $(this).val().length;

    if(count <= 10) {
      $('.popup__count').text(count);
    };

  });


// staging handlers

  $('.staging .slide-one-bg').scroolly([
    {
      from: '',
      to: 'con-top = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +2200 = bottom',
      to: 'con-top +2700 = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +2700 = bottom',
      to: 'doc-bottom',
      css: {
        opacity: '.0'
      }
    }

  ], $('.staging'));

  $('.staging .slide-two-bg').scroolly([
    {
      from: '',
      to: 'con-top +2650 = bottom',
      css: {
        opacity: '.0'
      }
    },
    {
      from: 'con-top +2650 = bottom',
      to: 'con-top +3200 = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +3200 = bottom',
      to: 'doc-bottom',
      css: {
        opacity: '.0'
      }
    }

  ], $('.staging'));

  $('.staging .slide-three-bg').scroolly([
    {
      from: '',
      to: 'con-top +3150 = bottom',
      css: {
        opacity: '.0'
      }
    },
    {
      from: 'con-top +3150 = bottom',
      to: 'con-top +4500 = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +4700 = bottom',
      to: 'doc-bottom',
      css: {
        opacity: '.0'
      }
    },

  ], $('.staging'));



  $('.staging .scene-1').scroolly([
    {
      from: '',
      to: 'con-top +500 = bottom',
      css: {
        opacity: '.0'
      }
    },
    {
      from: 'con-top +500 = bottom',
      to: 'con-top +900 = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +900 = bottom',
      to: 'doc-bottom',
      css: {
        opacity: '.0'
      }
    }

  ], $('.staging'));

  $('.staging .scene-2').scroolly([
    {
      from: '',
      to: 'con-top +1000 = bottom',
      css: {
        opacity: '.0'
      }
    },
    {
      from: 'con-top +1000 = bottom',
      to: 'con-top +1400 = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +1400 = bottom',
      to: 'doc-bottom',
      css: {
        opacity: '.0'
      }
    }
  ], $('.staging'));

  $('.staging .scene-3').scroolly([
    {
      from: '',
      to: 'con-top +1600 = bottom',
      css: {
        opacity: '.0'
      }
    },
    {
      from: 'con-top +1600 = bottom',
      to: 'con-top +2000 = bottom',
      css: {
        opacity: '1'
      }
    },
    {
      from: 'con-top +2000 = bottom',
      to: 'doc-bottom',
      css: {
        opacity: '.0'
      }
    }
  ], $('.staging'));


  $('.staging .scene-4').scroolly([
    {
      from: '',
      to: 'con-top +3600 = bottom',
      css: {
        left: '-200%'
      }
    },
    {
      from: 'con-top +3600 = bottom',
      to: 'con-top +4200 = bottom',
      css: {
        left: '5%'
      }
    },
    {
      from: 'con-top +4300 = bottom',
      to: 'doc-bottom',
      css: {
        left: '-200%'
      }
    }
  ], $('.staging'));

  $('.staging .scene-5').scroolly([
    {
      from: '',
      to: 'con-top +3600 = bottom',
      css: {
        left: '-200%'
      }
    },
    {
      from: 'con-top +3600 = bottom',
      to: 'con-top +4200 = bottom',
      css: {
        left: '5%'
      }
    },
    {
      from: 'con-top +4300 = bottom',
      to: 'doc-bottom',
      css: {
        left: '-200%'
      }
    }
  ], $('.staging'));

  $('.staging .scene-6').scroolly([
    {
      from: '',
      to: 'con-top +3600 = bottom',
      css: {
        left: '-200%'
      }
    },
    {
      from: 'con-top +3600 = bottom',
      to: 'con-top +4200 = bottom',
      css: {
        left: '5%'
      }
    },
    {
      from: 'con-top +4300 = bottom',
      to: 'doc-bottom',
      css: {
        left: '-200%'
      }
    }
  ], $('.staging'));

  $('.staging .scene-7').scroolly([
    {
      from: '',
      to: 'con-top +4200 = bottom',
      css: {
        bottom: '-200%'
      }
    },
    {
      from: 'con-top +4200 = bottom',
      to: 'doc-bottom',
      css: {
        bottom: '0%'
      }
    }
  ], $('.staging'));

});
