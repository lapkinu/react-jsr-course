import { ReviewsItem } from "../ReviewsItem/ReviewsItem";

export const ReviewsList = ({ reviewItems }) => {
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
