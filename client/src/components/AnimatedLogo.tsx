import { useEffect, useRef } from 'react';

const AnimatedLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 200;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];
    const particleCount = 300;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = 'bold 120px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, 'rgba(251, 146, 60, 0.8)');
        gradient.addColorStop(1, 'rgba(251, 146, 60, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'destination-in';
      ctx.fillStyle = 'rgba(251, 146, 60, 0.95)';
      ctx.fillText('UniSphere', canvas.width / 2, canvas.height / 2);

      ctx.globalCompositeOperation = 'source-over';
      
      const textGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      textGradient.addColorStop(0, 'rgba(251, 146, 60, 0.4)');
      textGradient.addColorStop(0.5, 'rgba(251, 146, 60, 0.6)');
      textGradient.addColorStop(1, 'rgba(251, 146, 60, 0.4)');
      
      ctx.strokeStyle = textGradient;
      ctx.lineWidth = 2;
      ctx.strokeText('UniSphere', canvas.width / 2, canvas.height / 2);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative" data-testid="animated-logo">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 blur-3xl animate-pulse" 
           style={{ animationDuration: '3s' }} />
      <canvas
        ref={canvasRef}
        className="relative mx-auto"
        style={{
          filter: 'drop-shadow(0 0 40px rgba(251, 146, 60, 0.6)) drop-shadow(0 0 80px rgba(251, 146, 60, 0.3))',
          width: '100%',
          height: 'auto',
          maxWidth: '800px',
        }}
      />
    </div>
  );
};

export default AnimatedLogo;
