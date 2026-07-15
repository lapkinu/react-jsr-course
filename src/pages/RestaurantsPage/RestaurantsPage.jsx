import { useMemo, useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard';
import { RestaurantsPageTitle } from '../../components/RestaurantsPageTitle/RestaurantsPageTitle';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs';

export const RestaurantsPage = ({ title }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0]?.id);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeRestaurantId),
    [activeRestaurantId],
  );

  if (!restaurants || restaurants.length === 0) {
    return (
      <p style={{ color: 'gray' }} className="reviews-empty">
        The list of restaurants is empty...
      </p>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <RestaurantsPageTitle title={title} />
      <div className="restaurants-tabs">
        <RestaurantTabs
          restaurants={restaurants}
          activeId={activeRestaurantId}
          onTabClick={setActiveRestaurantId}
        />
      </div>
      <RestaurantCard restaurant={activeRestaurant} />
    </div>
  );
};
