// Confetti effect for surprise page
if (document.getElementById("confetti-canvas")) {
    startConfetti();
}

/* Simple confetti function */
function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];

    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: 8,
            h: 8,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            speed: Math.random() * 3 + 2
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach((p) => {
            p.y += p.speed;
            if (p.y > canvas.height) p.y = -20;

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.w, p.h);
        });

        requestAnimationFrame(update);
    }
    update();
}
