import { useOutletContext } from 'react-router';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewsTitle } from '../ReviewsTitle/ReviewsTitle';
import styles from './ReviewsList.module.css';

export const ReviewsList = () => {
  const { reviewIds } = useOutletContext();
  if (!reviewIds || reviewIds.length === 0) {
    return <p className={styles.empty}>This restaurant has no reviews yet....</p>;
  }

  return (
    <>
      <ReviewsTitle title="Reviews" />
      <section className={styles.reviewsList}>
        <ul>
          {reviewIds.map((reviewId) => (
            <ReviewItem key={reviewId} reviewId={reviewId} />
          ))}
        </ul>
      </section>
    </>
  );
};
