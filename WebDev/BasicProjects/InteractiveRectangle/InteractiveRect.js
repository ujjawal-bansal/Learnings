// Select the rectangle element
const rectangle = document.querySelector('.rectangle');

// Add an event listener for mousemove on the rectangle
rectangle.addEventListener('mousemove', function (details) {
  const rectLocation = rectangle.getBoundingClientRect();
  const insideRect = details.clientX - rectLocation.left; // Get the mouse X position relative to the rectangle

  if (insideRect < rectLocation.width / 2) {
    // Calculate the red color for the left side
    const redcolor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, insideRect);
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redcolor}, 0, 0)`,
      ease: "power4.out", // Apply easing
    });
  } else {
    // Calculate the blue color for the right side
    const bluecolor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, insideRect);
    gsap.to(rectangle, {
      backgroundColor: `rgb(0, 0, ${bluecolor})`,
      ease: "power4.out", // Apply easing
    });
  }
});

// Add an event listener for mouseleave to reset the color to white
rectangle.addEventListener('mouseleave', function () {
  gsap.to(rectangle, {
    backgroundColor: "white"
  });
});