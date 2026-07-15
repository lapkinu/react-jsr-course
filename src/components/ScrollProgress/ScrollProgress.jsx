import { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;

          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

          setProgress(Math.round(progress));

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '6px',
          width: `${progress}%`,
          backgroundColor: '#3b82f6',
          zIndex: 1000,
        }}
      />

      <div>
        <p style={{ position: 'fixed', top: 2, left: 8 }}>Progress: {progress}%</p>
      </div>
    </div>
  );
};
