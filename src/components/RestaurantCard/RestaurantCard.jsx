import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/selectors';
import { RestaurantCardTitle } from '../RestaurantCardTitle/RestaurantCardTitle';
import { MenuTitle } from '../MenuTitle/MenuTitle';
import { MenuList } from '../MenuList/MenuList';
import { ReviewsTitle } from '../ReviewsTitle/ReviewsTitle';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { useAuth } from '../../hooks/useAuth';

import styles from './RestaurantCard.module.css';

export const RestaurantCard = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const { user } = useAuth();

  if (!restaurant) return null;

  return (
    <article className={styles.card}>
      <RestaurantCardTitle title={restaurant.name} />
      <MenuTitle title="Menu" />
      <MenuList menuIds={restaurant.menu} />
      <ReviewsTitle title="Reviews" />
      <ReviewsList reviewIds={restaurant.reviews} />
      {user && <ReviewForm />}
    </article>
  );
};
