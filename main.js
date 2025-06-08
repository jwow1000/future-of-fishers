import { waveAnimate } from "./waveAnimate";
window.Webflow ||= [];
window.Webflow.push(() => {
  let allowAnimation = true;
  let focusState = false;
  let currentFocus = null;
  const blurLayer =  document.querySelector(".fof-blur-layer");
  const mainWrapper = document.querySelector(".wrapper-fof");
  const animationToggle = document.querySelector(".animation-toggle");

  

  
  const list1 = document.querySelector(".collection-list-9");
  const list2 = document.querySelector(".collection-list-10");
  const list3 = document.querySelector(".collection-list-11");
  const list4 = document.querySelector(".collection-list-12");
  
  
  const animateList1 = new waveAnimate(list1, 32000, true, 10, 0);
  const animateList2 = new waveAnimate(list2, 28000, true, 20, 0.5);
  const animateList3 = new waveAnimate(list3, 30000, true, 30, 0.25);
  const animateList4 = new waveAnimate(list4, 24000, true, 30, 0.75);
  
  mainWrapper.addEventListener("click", (event) => {
    // console.log("click event", event.target);
    
    const target = event.target;
    const targetId = target.getAttribute("data-id");

    // if focusState is true, any click closes the focus
    if( focusState ) {
      // close the focus state
      if( currentFocus ) {
        blurLayer.style.opacity = '0';
        blurLayer.style.pointerEvents = 'none';
        currentFocus.style.display = 'none'; // Hide the previously focused element
        currentFocus.offsetHeight; // Force reflow
        focusState = false;
      }
    } else {
     if( targetId ) {
        // if no focus and target Id is true set new current focus and transition
        event.stopPropagation();
        const match = document.querySelector(`.fof-text-wrapper[data-id="${targetId}"]`);
        currentFocus = match;
        blurLayer.style.opacity = '1';
        blurLayer.style.pointerEvents = 'auto';
        // currentFocus.style.display = 'block'; // Show the new focused element
        requestAnimationFrame(() => {
          currentFocus.style.display = "block";
          currentFocus.offsetHeight; // Force reflow
        });
        focusState = true; 
      }   
    }

  });

  animationToggle.addEventListener("click", () => {
    // togle allowAnimation
    allowAnimation = !allowAnimation;
    if (allowAnimation) {
      animateList1.animate();
      animateList2.animate();
      animateList3.animate();
      animateList4.animate();
    } else {
      animateList1.stop();
      animateList2.stop();
      animateList3.stop();
      animateList4.stop();
    }
    

  })
  animationToggle.click();

});
