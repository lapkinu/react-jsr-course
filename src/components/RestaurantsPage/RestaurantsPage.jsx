import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { RestaurantsPageHeader } from '../RestaurantsPageHeader/RestaurantsPageHeader';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';
import { incrementKey, decrementKey } from '../../utils/counters';

export const RestaurantsPage = ({ title }) => {
  const [activeRestaurantId, setActivRestaurantId] = useState(restaurants[0]?.id);
  const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

  const [basket, setBasket] = useState({});

  const handleIncrement = (dishId) => {
    setBasket((prev) => incrementKey(prev, dishId));
  };

  const handleDecrement = (dishId) => {
    setBasket((prev) => decrementKey(prev, dishId));
  };

  if (!restaurants || restaurants.length === 0) {
    return (
      <p style={{ color: 'gray' }} className="reviews-empty">
        The list of restaurants is empty...
      </p>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <RestaurantsPageHeader title={title} />
      <div className="restaurants-tabs">
        <RestaurantTabs
          restaurants={restaurants}
          activeId={activeRestaurantId}
          onTabClick={setActivRestaurantId}
        />
      </div>
      <RestaurantCard
        restaurant={activeRestaurant}
        basket={basket}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
