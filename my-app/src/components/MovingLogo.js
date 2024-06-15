import React, { useEffect, useState } from 'react';

function MovingLogo({ src, id, radius = 150, speed = 0.02 }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const moveLogo = () => {
      const logo = document.getElementById(id);
      if (logo) {
        const centerX = (window.innerWidth / 2) - (logo.offsetWidth / 2);
        const centerY = (window.innerHeight / 2) - (logo.offsetHeight / 2);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;
      }
      // Increment the angle for the next frame
      const newAngle = angle + speed;
      setAngle(newAngle);
      requestAnimationFrame(moveLogo);
    };

    requestAnimationFrame(moveLogo);

    return () => {
      cancelAnimationFrame(moveLogo);
    };
  }, [angle, radius, speed]);

  return (
    <img
      id={id}
      src={src}
      alt={`${id} Logo`}
      style={{ position: 'absolute', width: '100px', height: 'auto',}}
    />
  );
}

export default MovingLogo;

