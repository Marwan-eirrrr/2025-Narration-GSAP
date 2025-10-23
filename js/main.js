gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);
let tl = gsap.timeline();
tl.to("#mouv1", {duration: 1, x: 35})
  .to("#mouv2", {duration: 2, x: 35})

/**Draggable section 6 */ 
Draggable.create("#logoInsta", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logoInsta' ).style.width = '100px'
    }
})

Draggable.create("#logoInsta", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logoInsta' ).style.width = '100px'
    }
})
/** Deuxieme draggable section 6 */

Draggable.create("#logolinkdin", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logolinkdin' ).style.width = '100px'
    }
})

Draggable.create("#logolinkdin", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logolinkdin' ).style.width = '100px'
    }
})

Draggable.create("#logolinkdin", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logolinkdin' ).style.width = '100px'
    }
})

Draggable.create("#logolinkdin", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logolinkdin' ).style.width = '100px'
    }
})


/** Troisieme draggable section 6 */

Draggable.create("#logotiktok", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logotiktok' ).style.width = '100px'
    }
})

Draggable.create("#logolinkdin", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logotiktok' ).style.width = '100px'
    }
})

Draggable.create("#logotiktok", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logotiktok' ).style.width = '100px'
    }
})

Draggable.create("#logotiktok", {
    type: "x, y",
    bounds: "#section6", cursor: 'grab',
    
    onDrag: function(){
        document.getElementById( 'logotiktok' ).style.width = '100px'
    }
})
/** annimation section5 */
gsap.registerPlugin(ScrollTrigger);

gsap.from("#photoSection5 img", {
  scrollTrigger: {
    trigger: "#section5",      
    start: "top 80%",          
    toggleActions: "play none none reverse", 
  },
  opacity: 0,                  
  y: 100,                      
  duration: 1,                 
  stagger: 0.2,                
  ease: "power2.out"
});

