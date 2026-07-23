import { Link } from 'react-router';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.code}>404</h2>
      <h2 className={styles.title}>page not found</h2>
      <p className={styles.message}>The requested page does not exist.</p>
      <Link to="/" className={styles.homeLink}>
        Back
      </Link>
    </div>
  );
};
