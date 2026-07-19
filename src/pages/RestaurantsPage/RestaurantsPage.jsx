import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/selectors';
import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard';
import { RestaurantsPageTitle } from '../../components/RestaurantsPageTitle/RestaurantsPageTitle';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/RestaurantTabsContainer';

export const RestaurantsPage = ({ title }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [userSelectedId, setUserSelectedId] = useState(null);
  const activeRestaurantId = userSelectedId || restaurantIds[0];

  if (!restaurantIds || restaurantIds.length === 0) return <p>Empty...</p>;

  return (
    <div>
      <RestaurantsPageTitle title={title} />
      <div className="restaurants-tabs">
        <RestaurantTabsContainer
          restaurantIds={restaurantIds}
          activeId={activeRestaurantId}
          onTabClick={setUserSelectedId}
        />
      </div>
      {activeRestaurantId && <RestaurantCard restaurantId={activeRestaurantId} />}
    </div>
  );
};
