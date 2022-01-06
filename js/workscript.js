$(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
  
    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: ''
    })
    .setClassToggle('', '') // add class to intro
    .addTo(controller);
});
