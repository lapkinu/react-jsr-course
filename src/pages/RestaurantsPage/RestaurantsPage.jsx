import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/selectors';
import { RestaurantsPageTitle } from '../../components/RestaurantsPageTitle/RestaurantsPageTitle';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/RestaurantTabsContainer';
import { Outlet } from 'react-router';

import styles from './RestaurantsPage.module.css';

export const RestaurantsPage = ({ title = 'Restaurants page' }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  if (!restaurantIds || restaurantIds.length === 0)
    return <p className={styles.empty}>The list of restaurants is empty...</p>;

  return (
    <div>
      <RestaurantsPageTitle title={title} />
      <RestaurantTabsContainer restaurantIds={restaurantIds} />
      <Outlet />
    </div>
  );
};
