// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/selectors';
// import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard';
import { RestaurantsPageTitle } from '../../components/RestaurantsPageTitle/RestaurantsPageTitle';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/RestaurantTabsContainer';
import { Outlet } from 'react-router';

import styles from './RestaurantsPage.module.css';

export const RestaurantsPage = ({ title = 'Restaurants page' }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  // const [userSelectedId, setUserSelectedId] = useState(null);
  // const activeRestaurantId = userSelectedId || restaurantIds[0];

  if (!restaurantIds || restaurantIds.length === 0)
    return <p className={styles.empty}>The list of restaurants is empty...</p>;

  return (
    <div>
      <RestaurantsPageTitle title={title} />
      <RestaurantTabsContainer
        restaurantIds={restaurantIds}

        // activeId={activeRestaurantId}
        // onTabClick={setUserSelectedId}
      />
      {/* {activeRestaurantId && <RestaurantCard restaurantId={activeRestaurantId} />} */}
      <Outlet />
    </div>
  );
};
