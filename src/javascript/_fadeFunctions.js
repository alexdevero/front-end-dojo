// Fade in function
const fadeIn = (element) => {
  let elementOpacity = 0.1;// initial opacity

  let timer = setInterval(function () {
    if (elementOpacity >= 1){
      clearInterval(timer);
    }

    element.style.opacity = elementOpacity;

    elementOpacity += elementOpacity * 0.1;

    element.style.display = 'block';
  }, 15);
}

// Fade out function
const fadeOut = (element) => {
  let elementOpacity = 1;// initial opacity

  let timer = setInterval(function () {
    if (elementOpacity <= 0.1){
      clearInterval(timer);

      element.style.display = 'none';
    }

    element.style.opacity = elementOpacity;

    elementOpacity -= elementOpacity * 0.1;
  }, 15);
}
