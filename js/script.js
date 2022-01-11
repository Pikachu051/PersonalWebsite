$(document).ready(function(){
  const jumpPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [
      {x: 100, y: 0},
      {x: 400, y: 1650},
      {x: 650, y: 1650}
    ]
  }
  const tween = new TimelineMax();

  tween.add(
    TweenMax.to(".mario", 1, {
      bezier: jumpPath,
      ease: Power1.easeInOut
    })
  )

  var tl = new TimelineMax();
  const controller = new ScrollMagic.Controller();

  tl.from("#car", .5, {x: 600});

  const marioscene = new ScrollMagic.Scene({
    triggerElement: '#pre2p',
    triggerHook: "0.5",
    duration: 1000
  })
    .setTween(tween)
    .addTo(controller);

  const carscene = new ScrollMagic.Scene({
    triggerElement: "#smb",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin()
    .setTween(tl)
      .addTo(controller);
  // build a scene
  const prescene = new ScrollMagic.Scene({
    triggerElement: '#pre2p',
    triggerHook: "onEnter"
  })
  .setClassToggle('#img-games', 'shown')
  .addTo(controller);
  
  const scene = new ScrollMagic.Scene({
    triggerElement: '#work1-content'
  })
  .setClassToggle('#work1-content', 'shown') // add class to intro
  .addTo(controller);

  const newScene1 = new ScrollMagic.Scene({
    triggerElement: '#work2-content'
  })
  .setClassToggle('#work2-content', 'shown')
  .addTo(controller);

  const newScene2 = new ScrollMagic.Scene({
    triggerElement: '#work3-content'
  })
  .setClassToggle('#work3-content', 'shown')
  .addTo(controller);
});

