// Select the rectangle element
const rectangle = document.querySelector('.rectangle');

// Add a mousemove event listener to the window
window.addEventListener("mousemove", function (details) {
    // Map the mouse X position to the rectangle's horizontal position
    const xval = gsap.utils.mapRange(
        0, // Start of the input range (left edge of the screen)
        window.innerWidth, // End of the input range (right edge of the screen)
        100+ rectangle.getBoundingClientRect().width/2, // Start of the output range (leftmost position for the rectangle)
        window.innerWidth -(100+ rectangle.getBoundingClientRect().width/2), // End of the output range (rightmost position for the rectangle)
        details.clientX // Mouse X position
    );

    // Smoothly animate the rectangle's horizontal position
    gsap.to(rectangle, {
        left: xval, // Move horizontally
        ease: Power3, // Smooth easing
    });
});