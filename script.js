



gsap.to("#page2-2",{
    duration:3,
    position:"fixed",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page2-p2",
        start:"-13% top",
        end:"100% end",
        // markers:true,
       scrub:1,
       anticipatePin:1,
       pin:true

        
    }
})




gsap.to("#page4-p2",{
    duration:3,
    position:"fixed",
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#page4-p2",
        start:"top top",
        end:"bottom end",
        // markers:true,
       scrub:0.05,
       anticipatePin:1,
       pin:true

    }
})