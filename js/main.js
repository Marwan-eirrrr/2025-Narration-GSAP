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