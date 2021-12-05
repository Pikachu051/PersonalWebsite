
$(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.work1-content'
    })
    .setClassToggle('.work1-content', 'shown') // add class to intro
    .addTo(controller);

});

