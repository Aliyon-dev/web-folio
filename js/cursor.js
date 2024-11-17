const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const cursorOutline_1 = document.querySelector(".cursor-outline_1");
const cursorOutline_2 = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Update dot position
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Update outline position with slight delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
        transform: `translate(-50%, -50%)`
    }, {
        duration: 500,
        fill: "forwards"
    });

});