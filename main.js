window.Webflow ||= [];
window.Webflow.push(() => {
  let focusState = false;
  let currentFocus = null;
  const blurLayer =  document.querySelector(".fof-blur-layer");
  const mainWrapper = document.querySelector(".wrapper-fof");
  
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
});
