(() => {
  // Anchor is link or links with id of element
  // you want to scroll to defined as value of 'href' attribute
  // Duration if time in seconds determining the speed of scroll
  const smoothScroll = (anchor, duration) => {
    // Get starting location
    const startLocation = window.pageYOffset;

    // Get location of the anchor
    const endLocation = anchor.offsetTop;

    // Calculate how far to scroll
    const distance = endLocation - startLocation;

    // Calculate how fast to scroll
    const increments = distance/(duration/16);

    let stopAnimation;

    // Scroll the page by an increment, and check if it's time to stop
    const animateScroll = () => {
      window.scrollBy(0, increments);

      stopAnimation();
    };

    if (increments >= 0) {
      // Stop animation when you reach the anchor or the bottom of the page
      stopAnimation = () => {
        let travelled = window.pageYOffset;

        if ((travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight)) {
          clearInterval(runAnimation);
        }
      };
    }

    // Loop the animation function
    const runAnimation = setInterval(animateScroll, 16);
  };

  // Get all smooth scroll links (use the first parameter)
  const anchors = document.querySelectorAll(anchor);

  for (let x = 0, y = anchors.length; x<y; x++) {
    anchors[x].addEventListener('click', (e) => {
      e.preventDefault();

      // Get id of the target element from 'href'
      let anchorId = anchors[x].getAttribute('href');

      // Find target element using id
      let anchorTarget = document.querySelector(anchorId);

      // If target exists initiate smooth scroll
      if (anchorTarget) {
        smoothScroll(anchorTarget, 400);
      }
    }, false);
  };
})();
