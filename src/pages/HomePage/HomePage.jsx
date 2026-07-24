import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome 🍽️</h1>
      <p className={styles.subtitle}>The best restaurants in town !</p>
    </div>
  );
};
