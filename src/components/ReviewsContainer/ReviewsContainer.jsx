import { useAuth } from '../../hooks/useAuth';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const ReviewsContainer = () => {
  const { user } = useAuth();
  return (
    <>
      <ReviewsList />
      {user && <ReviewForm />}
    </>
  );
};
