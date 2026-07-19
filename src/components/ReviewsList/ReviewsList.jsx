import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

import styles from './ReviewsList.module.css';

export const ReviewsList = ({ reviewItems }) => {
  if (!reviewItems || reviewItems.length === 0) {
    return <p className={styles.empty}>This restaurant has no reviews yet....</p>;
  }

  return (
    <section>
      <ul className={styles.list}>
        {reviewItems.map((review) => (
          <ReviewsItem key={review.id} text={review.text} />
        ))}
      </ul>
    </section>
  );
};
