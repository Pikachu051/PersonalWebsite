const run = ()=>{
    console.log("I am runnin, don't worry");
};
$(document).ready(function() {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#page1'
    }).setClassToggle('#page1', 'fade-in') // add class to intro
    .addIndicators() //require plug-in
    .addTo(controller);
});

//# sourceMappingURL=index.810bb8fa.js.map
