import { RestaurantCardHeader } from "../RestaurantCardHeader/RestaurantCardHeader";
import { MenuHeader } from "../MenuHeader/MenuHeader";
import { MenuList } from "../MenuList/MenuList";
import { ReviewsHeader } from "../ReviewsHeader/ReviewsHeader";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const RestaurantCard = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <article
      className="restaurant-card"
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <RestaurantCardHeader name={name} />
      <MenuHeader title="Menu" />
      <MenuList menuItems={menu} title="Menu" />
      <ReviewsHeader title="Reviews" />
      <ReviewsList reviewItems={reviews} />
    </article>
  );
};
