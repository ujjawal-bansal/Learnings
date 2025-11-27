const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            func(...args);
        }
    };
};

document.querySelector("#center").addEventListener(
    "mousemove",
    throttleFunction((event) => {
        // Create the div container for the image
        const div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = event.clientX + "px";
        div.style.top = event.clientY + "px";

        // Create the image element
        const img = document.createElement("img");
        img.setAttribute(
            "src",
            "https://images.unsplash.com/photo-1737320372090-c61d2cb88ab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
        );
        div.appendChild(img);
        document.body.appendChild(div);

        // Animate the image using GSAP
        gsap.to(img, {
            y: "0%",
            ease: "power1.out",
            duration: 0.2,
        });

        gsap.to(img, {
            y: "100%",
            ease: "power2.in",
            delay: 0.6,
        });

        // Remove the div after 2 seconds
        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 400)
);