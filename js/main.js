gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);   /*--vous monsieur*/

/** annimation section1 */

let tl = gsap.timeline();
tl.to("#mouv1", {duration: 1, x: 35})
  .to("#mouv2", {duration: 2, x: 35})

/** annimation section5 */

gsap.from(".section5__photos", {
    scrollTrigger: {
        trigger: "#section5",    
        markers: true,  
        start: "top 50%", 
        end:"top 20%",     
        scrub:1,    
        toggleActions: "play none reverse reset",
    },

  opacity: 0,                  
  y: 100,                      
  duration: 1,                 
  stagger: 0.2,                
  ease: "power2.out"
});

/**Draggable section 6 */ 

Draggable.create("#logoInsta", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById('logoInsta').style.width = '100px'
    }
})
/** Deuxieme draggable section 6 */

Draggable.create("#logolinkdin", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById('logolinkdin').style.width = '100px'
    }
})
/** Troisieme draggable section 6 */

Draggable.create("#logotiktok",{
    type: "x, y",
    bounds: "#section6",cursor:'grab',
    
    onDrag: function(){
        document.getElementById('logotiktok').style.width ='100px'
    }
})


