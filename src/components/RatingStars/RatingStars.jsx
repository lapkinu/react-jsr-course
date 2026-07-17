import styles from './RatingStars.module.css';

export const RatingStars = ({ rating, max = 5 }) => {
  return (
    <span className={styles.stars}>
      {Array.from({ length: max }).map((_, index) => (
        <span key={index} className={index < rating ? styles.filled : styles.empty}>
          ★
        </span>
      ))}
    </span>
  );
};
