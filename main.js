window.Webflow ||= [];
window.Webflow.push(() => {
  let focusState = false;
  let currentFocus = null;

  // Add click events to gallery items
  const images = document.querySelectorAll(".w-dyn-items [data-id]");
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      console.log("tag", e.target);

      // Get data-id instead of id
      const targetId = e.target.getAttribute("data-id");
      if (!focusState) {
        const match = document.querySelector(`.fof-text-wrapper[data-id="${targetId}"]`);
        currentFocus = match;
        currentFocus.style.display = 'block';
        focusState = true;
      } else {
        currentFocus.style.display = 'none';
        focusState = false;
      }

    });
  });
});
