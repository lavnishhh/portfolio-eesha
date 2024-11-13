import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particleArray = useRef([]);
  const frameTime = useRef(Date.now());
  const particleCount = window.innerWidth < 500 ? 50 : 100;

  const v = [1, -1];

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = v[Math.round(Math.random())];
        this.dy = v[Math.round(Math.random())];
        this.size = 3;
        this.drawItem = this.circle;
        this.drawItemEffect = this.goToTarget;
        this.effectQueue = this.connections;
        this.executeOnce = this.noAction;

        this.targetX = 0;
        this.targetY = 0;
      }

      draw() {
        this.drawItem();
        this.drawItemEffect();
      }

      goToTarget() {
        if (this.x !== this.targetX) {
          this.x += (this.targetX - this.x) * (Date.now() - frameTime.current) / 100;
        }
        if (this.y !== this.targetY) {
          this.y += (this.targetY - this.y) * (Date.now() - frameTime.current) / 100;
        }
        if (Math.abs(this.targetX - this.x) < 1 && Math.abs(this.targetY - this.y) < 1) {
          this.x = this.targetX;
          this.y = this.targetY;
          this.drawItemEffect = this.effectQueue;
        }
      }

      shapeEffectConnections() {
        this.drawItemEffect = this.goToTarget;
        this.effectQueue = this.connections;
        this.executeOnce = this.noAction;
      }

      circle() {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.closePath();
        c.fill();
      }

      connections() {
        particleArray.current.forEach(particle => {
          if (Math.sqrt(Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2)) < 100) {
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(particle.x, particle.y);
            c.stroke();
          }
        });

        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
      }

      noAction() {}
    }

    const createParticles = () => {
      particleArray.current = [];
      for (let i = 0; i < particleCount; i++) {
        const particle = new Particle(canvas.width / 2, canvas.height / 2);
        particle.targetX = Math.random() * canvas.width;
        particle.targetY = Math.random() * canvas.height;
        particleArray.current.push(particle);
      }
      c.lineWidth = 1;
      c.strokeStyle = '#FFF';
      c.fillStyle = '#FFF';
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      c.fillStyle = '#fef9c3';
      c.fillRect(0, 0, canvas.width, canvas.height);
      particleArray.current.forEach(particle => particle.draw());
      frameTime.current = Date.now();
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount]);

  return <div id="canvas-holder" className=' sticky w-full h-full -z-50 bg-black'>
            <canvas ref={canvasRef} className='w-full h-full fixed' id="graphic"></canvas>
        </div>
};

export default ParticleCanvas;