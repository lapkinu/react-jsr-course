import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/selectors';
import { Tab } from '../Tab/Tab';
import styles from './RestaurantTabsContainer.module.css';

const RestaurantTab = ({ id, isActive, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return null;
  return <Tab name={restaurant.name} isActive={isActive} onClick={onClick} />;
};

export const RestaurantTabsContainer = ({ restaurantIds, activeId, onTabClick }) => {
  return (
    <div className={styles.tabs}>
      {restaurantIds.map((id) => (
        <RestaurantTab key={id} id={id} isActive={id === activeId} onClick={() => onTabClick(id)} />
      ))}
    </div>
  );
};
