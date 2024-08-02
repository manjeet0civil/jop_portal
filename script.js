gsap.from("nav",{
    top:-30,
    duration:1,
    opacity:0,
})
gsap.to("nav",{
    backgroundColor:"black",
    color:"white",
    duration:0.3,
    fontSize:"1.5vw",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
       scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        scrub:2
    }
})
gsap.from(".page1 h1 ",{
    x:-30,
    opacity:0,
    duration:2,
    delay:0.5,
    
})
gsap.from(".page1 p ",{
    x:-30,
    opacity:0,
    duration:2,
    delay:0.5,
    
})
gsap.from(".txt-cont",{
    x:-230,
    opacity:0,
    duration:7,
    delay:1,
    scrollTrigger:{
        trigger:".txt-cont",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 20%",
        scrub:2,
    }
  
})
gsap.from(".box",{
    y:100,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        // markers:true,
        start:"top 130%",
        end:"top -20%",
        scrub:2,
        tag:2,
    }
  
})
gsap.from(".pg-3-txt",{
    x:-300,
    opacity:0,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        
        scrub:2,
        
    }
  
})
gsap.from(".bigbox",{
    y:300,
    opacity:0,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".bigbox",
        scroller:"body",
        // markers:true,
        start:"top 200%",
        end:"top 90%",
       
        scrub:2,
        
    }
  
})
