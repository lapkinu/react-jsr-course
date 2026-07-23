import { Link } from 'react-router';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Welcome to AnyBite! 🍽️</h1>
      <p className={styles.subtitle}>The best restaurants in town !</p>
      <Link to="/restaurants" className={styles.ctaButton}>
        restaurants
      </Link>
    </div>
  );
};
