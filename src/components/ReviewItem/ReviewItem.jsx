import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/selectors';
import { ReviewUser } from '../ReviewUser/ReviewUser';
import { RatingStars } from '../RatingStars/RatingStars';
import styles from './ReviewItem.module.css';

export const ReviewItem = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  if (!review) return null;

  return (
    <li className={styles.item}>
      <div className={styles.header}>
        <ReviewUser userId={review.userId} />
        <RatingStars rating={review.rating} />
      </div>
      <p className={styles.text}>{review.text}</p>
    </li>
  );
};
