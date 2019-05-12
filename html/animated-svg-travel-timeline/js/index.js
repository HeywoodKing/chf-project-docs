var controller = new ScrollMagic.Controller();
TweenMax.set('#timeline',{visibility:0});

var tweenOne =
new TweenMax.fromTo('#timeline',1,{drawSVG:"0%"}, {drawSVG:"10%"});  
 
var scene1 = new ScrollMagic.Scene({
  triggerElement: '#timeline',
}).setTween(tweenOne).addTo(controller); 
    
var tweenTwo =
new TweenMax.fromTo('#timeline',1,{drawSVG:"10%"}, {drawSVG:"20%"});

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.dayTwo',
}).setTween(tweenTwo).addTo(controller); 


var tweenThree =
new TweenMax.fromTo('#timeline',1,{drawSVG:"20%"}, {drawSVG:"40%"});

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.dayThree',
}).setTween(tweenThree).addTo(controller); 


var tweenFour =
new TweenMax.fromTo('#timeline',1,{drawSVG:"40%"}, {drawSVG:"65%"});

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.dayFour',
}).setTween(tweenFour).addTo(controller); 
 
var tweenFive =
new TweenMax.fromTo('#timeline',1,{drawSVG:"65%"}, {drawSVG:"85%"});

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.dayFive',
}).setTween(tweenFive).addTo(controller); 

var tweenSix =
new TweenMax.fromTo('#timeline',1,{drawSVG:"85%"}, {drawSVG:"102%"});

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.daySix',
}).setTween(tweenSix).addTo(controller);