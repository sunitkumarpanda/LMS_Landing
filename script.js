// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// Page animation.

function firstpageAnim(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to("span",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -2,
        stagger: .2
     })
}

firstpageAnim();
