const galaxies = [];

onmessage = (e) => {
    const { canvas, config } = e.data;
    const ctx = canvas.getContext("2d");
    let { id, scaleX, scaleY, arms, totalStars } = config;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const stars = [];

    // 🔹 Si es la galaxia central, aumentamos la cantidad de estrellas
    if (id === "galaxy-center") {
        totalStars = Math.floor(totalStars * 1.8); // casi el doble de estrellas
    }

    const a = 2, b = 0.15;
    for (let i = 0; i < totalStars; i++) {
        const arm = i % arms;

        // 🔹 Para la galaxia central extendemos más el ángulo para cerrar el espiral
        const thetaBase = (i / totalStars) * 30 * Math.PI;
        const theta = id === "galaxy-center"
            ? thetaBase * 1.2 + (arm * 2 * Math.PI / arms) // más largo hacia la izquierda
            : thetaBase + (arm * 2 * Math.PI / arms);

        const r = a * Math.exp(b * theta);
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);

        const size = id === "galaxy-center" 
            ? Math.random() * 1.0 + 0.2
            : Math.random() * 1.2 + 0.3;

        const alpha = id === "galaxy-center"
            ? Math.random() * 0.9 + 0.7
            : Math.random() * 0.6 + 0.2;

        const twinkleSpeed = Math.random() * 0.02 + 0.005;
        const twinkleOffset = Math.random() * Math.PI * 2;

        stars.push({ x, y, size, alpha, baseAlpha: alpha, twinkleSpeed, twinkleOffset });
    }

    galaxies.push({ ctx, canvas, cx, cy, scaleX, scaleY, stars, id });
};

function drawStar(ctx, x, y, size, alpha, isCentral) {
    const radius = isCentral ? size * 3.2 : size * 2.2;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

    if (isCentral) {
        gradient.addColorStop(0, `rgba(255,255,255,${alpha})`);
        gradient.addColorStop(0.1, `rgba(255,255,220,${alpha * 0.9})`);
        gradient.addColorStop(0.3, `rgba(200,220,255,${alpha * 0.7})`);
        gradient.addColorStop(0.6, `rgba(150,180,255,${alpha * 0.4})`);
        gradient.addColorStop(1, "transparent");
    } else {
        gradient.addColorStop(0, `rgba(255,255,255,${alpha})`);
        gradient.addColorStop(0.5, `rgba(255,255,255,${alpha * 0.5})`);
        gradient.addColorStop(1, "transparent");
    }

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    let angle = 0;

    for (const g of galaxies) {
        const { ctx, canvas, cx, cy, scaleX, scaleY, stars, id } = g;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        ctx.translate(cx, cy);

        const adjustedScaleX = id === "galaxy-center" ? scaleX * 0.6 : scaleX;
        const adjustedScaleY = id === "galaxy-center" ? scaleY * 0.4 : scaleY * 0.9;

        ctx.scale(adjustedScaleX, adjustedScaleY);
        ctx.rotate(angle * 0.001);

        for (const star of stars) {
            const twinkle = Math.sin(star.twinkleOffset) * 0.3;
            const dynamicAlpha = star.baseAlpha + twinkle;
            star.twinkleOffset += star.twinkleSpeed;

            drawStar(ctx, star.x, star.y, star.size, dynamicAlpha, id === "galaxy-center");
        }

        ctx.restore();
    }

    angle += 1;
    requestAnimationFrame(animate);
}

animate();