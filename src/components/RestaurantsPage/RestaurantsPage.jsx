import { restaurants } from "../../../materials/mock";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { RestaurantsPageHeader } from "../RestaurantsPageHeader/RestaurantsPageHeader";

export const RestaurantsPage = ({ title }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <RestaurantsPageHeader title={title} />
      <div className="restaurant-card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
