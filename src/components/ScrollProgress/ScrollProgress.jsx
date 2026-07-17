import { useState, useEffect } from 'react';
import styles from './ScrollProgress.module.css';

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
          const progressValue = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setProgress(Math.round(progressValue));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      <p className={styles.progressText}>Progress: {progress}%</p>
    </div>
  );
};
