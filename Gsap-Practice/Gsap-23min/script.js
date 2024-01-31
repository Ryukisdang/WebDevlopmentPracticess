gsap.from('.navbar',{duration:1,y:'-100%',ease:'bounce'});
gsap.from('.links',{duration:1,opacity:0,delay:1,stagger:0.5});

gsap.from('.right',{duration:2,x:'-100vw',delay:1,ease:'power2.in'});
gsap.from('.left',{duration:1,delay:2,x:'-100%',ease:'power1.in'});
gsap.to('.footer',{duration:2,y:-100%,ease:'elastic',delay:2.5});
