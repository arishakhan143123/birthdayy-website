// ==========================
// CUSTOM SETTINGS
// ==========================
const BOYFRIEND_NAME = "Myyyyyy babbbyyyyy(atif)";
const BIRTHDAY_DATE = "2025-11-23T00:00:00"; // Change to his birthday
// ==========================

// Insert name
document.addEventListener("DOMContentLoaded", () => {
    const nameTag = document.getElementById("name");
    if (nameTag) nameTag.textContent = BOYFRIEND_NAME;
});

// COUNTDOWN
function updateCountdown() {
    const birthday = new Date(BIRTHDAY_DATE).getTime();
    const now = new Date().getTime();
    const diff = birthday - now;

    if (diff < 0) {
        document.getElementById("countdown").innerHTML = "It's your birthday today! 🎉❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d : ${hours}h : ${mins}m : ${secs}s`;
}

setInterval(updateCountdown, 1000);

// CONFETTI
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 40 + 10
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let c of confetti) {
            ctx.beginPath();
            ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
            ctx.fill();
        }

        update();
    }

    function update() {
        for (let c of confetti) {
            c.y += Math.cos(c.d) + 1 + c.r / 2;
            c.x += Math.sin(c.d);

            if (c.y > canvas.height) {
                c.x = Math.random() * canvas.width;
                c.y = -10;
            }
        }
    }

    setInterval(draw, 20);
}
