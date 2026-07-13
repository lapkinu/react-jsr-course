import { ReviewFormTitle } from '../ReviewFormTitle/ReviewFormTitle';
import { Counter } from '../Counter/Counter';
import { useReviewForm } from '../../hooks/useReviewForm';
import { RatingStars } from '../RatingStars/RatingStars';
import { COUNTER_CONST_RATING } from '../../constants/counterConst';

export const ReviewForm = () => {
  const { form, setName, setText, incrementRating, decrementRating, clearForm } = useReviewForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', form);
    clearForm();
  };

  return (
    <>
      <ReviewFormTitle title="Leave your review" />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="review-name">Name: </label>

          <input
            id="review-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="review-text">Review: </label>
          <textarea
            id="review-text"
            name="text"
            autoComplete="off"
            value={form.text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your review here..."
            rows={4}
          />
        </div>

        <div>
          <span>Rating:</span>
          <RatingStars rating={form.rating} max={COUNTER_CONST_RATING.MAX} />
          <Counter
            value={form.rating}
            onIncrement={incrementRating}
            onDecrement={decrementRating}
            canIncrement={form.rating < COUNTER_CONST_RATING.MAX}
            canDecrement={form.rating > COUNTER_CONST_RATING.MIN}
          />
        </div>

        <div>
          <button type="submit">Send Review</button>
          <button type="button" onClick={clearForm}>
            Clear Form
          </button>
        </div>
      </form>
    </>
  );
};
