window.Webflow ||= [];
window.Webflow.push(() => {
  let focusState = false

  // add click events to gallery items
  const images = document.querySelectorAll(".w-dyn-items");
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      console.log("tag", e.target);
      image.classList.add('fof-focus');
      
    });
  });

});
