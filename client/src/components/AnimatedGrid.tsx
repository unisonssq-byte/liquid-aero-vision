import { useEffect, useRef } from 'react';

const AnimatedGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let rotation = 0;
    const gridSize = 800;
    const lineWidth = 2;
    const spacing = 40;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      
      // Create gradient for the grid
      const gradient = ctx.createLinearGradient(-gridSize/2, -gridSize/2, gridSize/2, gridSize/2);
      gradient.addColorStop(0, 'rgba(255, 120, 80, 0.15)');
      gradient.addColorStop(0.5, 'rgba(120, 180, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(180, 100, 255, 0.15)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      
      // Draw vertical lines
      for (let x = -gridSize/2; x <= gridSize/2; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, -gridSize/2);
        ctx.lineTo(x, gridSize/2);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = -gridSize/2; y <= gridSize/2; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(-gridSize/2, y);
        ctx.lineTo(gridSize/2, y);
        ctx.stroke();
      }
      
      ctx.restore();
      
      rotation += 0.0003; // Very slow rotation
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedGrid;
