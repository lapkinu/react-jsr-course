import { RestaurantCardTitle } from '../RestaurantCardTitle/RestaurantCardTitle';
import { MenuTitle } from '../MenuTitle/MenuTitle';
import { MenuList } from '../MenuList/MenuList';
import { ReviewsTitle } from '../ReviewsTitle/ReviewsTitle';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const RestaurantCard = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <article
      className="restaurant-card"
      style={{
        border: '1px solid black',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
      }}
    >
      <RestaurantCardTitle title={name} />
      <MenuTitle title="Menu" />
      <MenuList menuItems={menu} title="Menu" />
      <ReviewsTitle title="Reviews" />
      <ReviewsList reviewItems={reviews} />
      <ReviewForm />
    </article>
  );
};
