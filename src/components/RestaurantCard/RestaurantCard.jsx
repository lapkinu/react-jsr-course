import { RestaurantCardTitle } from '../RestaurantCardTitle/RestaurantCardTitle';
import { MenuTitle } from '../MenuTitle/MenuTitle';
import { MenuList } from '../MenuList/MenuList';
import { ReviewsTitle } from '../ReviewsTitle/ReviewsTitle';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { useUser } from '../../hooks/useUser';

import styles from './RestaurantCard.module.css';

export const RestaurantCard = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  const { user } = useUser();

  return (
    <article className={styles.card}>
      <RestaurantCardTitle title={name} />
      <MenuTitle title="Menu" />
      <MenuList menuItems={menu} title="Menu" />
      <ReviewsTitle title="Reviews" />
      <ReviewsList reviewItems={reviews} />
      {user && <ReviewForm />}
    </article>
  );
};
