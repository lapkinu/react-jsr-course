import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/selectors';
import { Tab } from '../Tab/Tab';
import styles from './RestaurantTabsContainer.module.css';

const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return null;

  return <Tab name={restaurant.name} to={`/restaurants/${id}`} />;
};

export const RestaurantTabsContainer = ({ restaurantIds }) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <div className={styles.tabs}>
          <RestaurantTab key={id} id={id} />
        </div>
      ))}
    </div>
  );
};
