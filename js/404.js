/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    //dotColor: '#171A21',
    //lineColor: '#171A21',
    dotColor: '#FFFFFF',
    lineColor: '#FFFFFF',
    density: 35000,
    parallax: true,
    curvedLines: true,
    particleRadius: 1,
    lineWidth: 0.5,
    minSpeedX: 1,
    minSpeedY: 1,
    directionX: 'center',
    directionY: 'center'
  });
  var intro = document.getElementById('404');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
