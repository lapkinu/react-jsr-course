import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { RestaurantsPageHeader } from '../RestaurantsPageHeader/RestaurantsPageHeader';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';
import { COUNTER_LIMITS } from '../../constants/limits';

export const RestaurantsPage = ({ title }) => {
  const [activRestaurantId, setActivRestaurantId] = useState(restaurants[0]?.id);
  const activRestaurant = restaurants.find((restaurant) => restaurant.id === activRestaurantId);

  const [basket, setBasket] = useState({});

  const handleIncrement = (dishId) => {
    setBasket((prev) => {
      const currentCount = prev[dishId] || 0;
      return currentCount >= COUNTER_LIMITS.MAX ? prev : { ...prev, [dishId]: currentCount + 1 };
    });
  };

  const handleDecrement = (dishId) => {
    setBasket((prev) => {
      const currentCount = prev[dishId] || 0;

      if (currentCount <= COUNTER_LIMITS.MIN) {
        return prev;
      }

      const newCount = currentCount - 1;
      const newBasket = { ...prev };

      if (newCount === 0) {
        delete newBasket[dishId];
      } else {
        newBasket[dishId] = newCount;
      }

      return newBasket;
    });
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
          activeId={activRestaurantId}
          onTabClic={setActivRestaurantId}
        />
      </div>
      <RestaurantCard
        restaurant={activRestaurant}
        basket={basket}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
