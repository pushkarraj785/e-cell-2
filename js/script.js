gsap.to(".menu_icon_box",{
    backgroundColor:"rgba(255, 255, 255, 0.25)",
    borderRadius:"10%",
    duration:0.5,
    margin:"20px",
    scrollTrigger:{
        trigger:".menu_icon_box",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,
        start:"top -25%",
        end:"top -100%",
        scrub:2
    }
})
