import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

export const ReviewsList = ({ reviewItems }) => {
  if (!reviewItems || reviewItems.length === 0) {
    return (
      <p style={{ color: 'gray' }} className="reviews-empty">
        This restaurant has no reviews yet....
      </p>
    );
  }
  return (
    <section className="reviews-List">
      <ul>
        {reviewItems.map((review) => (
          <ReviewsItem key={review.id} text={review.text} />
        ))}
      </ul>
    </section>
  );
};
