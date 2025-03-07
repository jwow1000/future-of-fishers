window.Webflow ||= [];
window.Webflow.push(() => {
  // // select the 4 columns
  // const gallery1 = document.getElementById('gallery-1');
  // const gallery2 = document.getElementById('gallery-2');
  // const gallery3 = document.getElementById('gallery-3');
  // const gallery4 = document.getElementById('gallery-4');
  const galleries = document.querySelectorAll('.collection-list-fof');
  
  galleries.forEach((gallery) => {
    const randomScroll = Math.random() * 1800;

    console.log("scrollConatiner", gallery, randomScroll);

    gallery.scroll({
      top: randomScroll,
      left: 0,
      behavior: "smooth",
    });

  });

});
