import { ReviewItem } from '../ReviewItem/ReviewItem';
import styles from './ReviewsList.module.css';

export const ReviewsList = ({ reviewIds }) => {
  if (!reviewIds || reviewIds.length === 0) {
    return <p className={styles.empty}>No reviews yet.</p>;
  }

  return (
    <section className={styles.reviewsList}>
      <ul>
        {reviewIds.map((reviewId) => (
          <ReviewItem key={reviewId} reviewId={reviewId} />
        ))}
      </ul>
    </section>
  );
};
