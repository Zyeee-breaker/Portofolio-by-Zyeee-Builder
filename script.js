
// Efek typing
const texts = ["Web Design", "Developer Game", "Editing", "Video", "Tester", "dan lain lain"];
let textIndex = 0;
let charIndex = 0;
let typingForward = true;
let displayText = "";

function startTyping() {
    setInterval(() => {
        let current = texts[textIndex];
        if (typingForward) {
            displayText = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                typingForward = false;
                setTimeout(() => {}, 1000);
            }
        } else {
            displayText = current.substring(0, charIndex--);
            if (charIndex < 0) {
                typingForward = true;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        document.getElementById("typingText").innerText = displayText;
    }, 120);
}
startTyping();

// Icon random bergerak
const icons = [
    { class: "fa-brands fa-html5", color: "#e34f26" },
    { class: "fa-brands fa-css3-alt", color: "#264de4" },
    { class: "fa-brands fa-laravel", color: "#ff2d20" },
    { class: "fa-brands fa-react", color: "#61dbfb" },
    { class: "fa-brands fa-figma", color: "#a259ff" },
    { class: "fa-brands fa-uncharted", color: "#005f73" },
    { class: "fa-solid fa-photo-film", color: "#ff7f50" },
    { class: "fa-solid fa-gamepad", color: "#f9a825" },
    { class: "fa-solid fa-video", color: "#1e90ff" },
    { class: "fa-solid fa-vial-circle-check", color: "#2ecc71" },
    { class: "fa-solid fa-ellipsis", color: "#6c757d" }
];

const container = document.getElementById("icon-container");
const size = 600;
const iconElements = [];

icons.forEach(icon => {
    const el = document.createElement("i");
    el.className = icon.class + " absolute text-3xl transition-transform duration-300";
    el.style.color = icon.color;
    el.style.left = Math.random() * (size - 50) + "px";
    el.style.top = Math.random() * (size - 50) + "px";
    el.dataset.dx = (Math.random() - 0.5) * 2;
    el.dataset.dy = (Math.random() - 0.5) * 2;

    el.addEventListener("mouseenter", () => {
        el.dataset.pause = "true";
        el.style.transform = "scale(1.5)";
        el.style.textShadow = `0 0 15px ${icon.color}`;
    });
    el.addEventListener("mouseleave", () => {
        el.dataset.pause = "false";
        el.style.transform = "scale(1)";
        el.style.textShadow = "none";
    });

    container.appendChild(el);
    iconElements.push(el);
});

// Animasi random gerak
setInterval(() => {
    iconElements.forEach(el => {
        if (el.dataset.pause === "true") return;

        let x = parseFloat(el.style.left);
        let y = parseFloat(el.style.top);
        let dx = parseFloat(el.dataset.dx);
        let dy = parseFloat(el.dataset.dy);

        x += dx;
        y += dy;

        if (x < 0 || x > size - 40) el.dataset.dx = -dx;
        if (y < 0 || y > size - 40) el.dataset.dy = -dy;

        el.style.left = x + "px";
        el.style.top = y + "px";
    });
}, 30);
