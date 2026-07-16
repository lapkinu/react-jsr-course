import { Tab } from '../Tab/Tab';

import styles from './RestaurantTabs.module.css';

export const RestaurantTabs = ({ restaurants, activeId, onTabClick }) => {
  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <Tab
          key={restaurant.id}
          name={restaurant.name}
          isActive={restaurant.id === activeId}
          onClick={() => onTabClick(restaurant.id)}
        />
      ))}
    </div>
  );
};
