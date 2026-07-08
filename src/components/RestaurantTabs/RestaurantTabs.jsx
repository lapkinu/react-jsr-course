import { Tab } from '../Tab/Tab';

export const RestaurantTabs = ({ restaurants, activeId, onTabClick }) => {
  return (
    <div className="tabs-container">
      {restaurants.map((restaurant) => {
        return (
          <Tab
            key={restaurant.id}
            name={restaurant.name}
            isActive={restaurant.id === activeId}
            onClick={() => onTabClick(restaurant.id)}
          />
        );
      })}
    </div>
  );
};
