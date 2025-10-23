import { useEffect, useRef } from "react";

export default function CoolBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h, raf;
    const particles = [];
    const numParticles = 60;

    // Get colors from CSS custom properties
    const getComputedColor = (colorVar) => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(colorVar)
        .trim();
    };

    const getColors = () => {
      const primaryColor = getComputedColor("--primary-color") || "#ef4444";
      const secondaryColor = getComputedColor("--secondary-color") || "#f97316";
      const accentColor = getComputedColor("--accent-color") || "#dc2626";

      return [
        `${primaryColor}cc`, // primary with 80% opacity
        `${secondaryColor}b3`, // secondary with 70% opacity
        `${accentColor}b3`, // accent with 70% opacity
      ];
    };

    let colors = getColors();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);

    // Create initial particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Update colors dynamically
      colors = getColors();
      const primaryColor = getComputedColor("--primary-color") || "#ef4444";

      // subtle background gradient
      const gradient = ctx.createRadialGradient(
        w / 2,
        h / 2,
        h * 0.2,
        w / 2,
        h / 2,
        h
      );
      gradient.addColorStop(0, "#0a0a0f");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Update particle colors and render them
      particles.forEach((p, index) => {
        // Update particle color based on current theme colors
        p.color = colors[index % colors.length];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // movement
        p.x += p.dx;
        p.y += p.dy;

        // bounce off edges
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });

      // connect nearby particles with soft lines
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist =
            (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
          if (dist < 9000) {
            ctx.beginPath();
            ctx.strokeStyle = `${primaryColor}33`; // 20% opacity
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden",
        background: "radial-gradient(circle at 20% 20%, #0f172a, #000)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
