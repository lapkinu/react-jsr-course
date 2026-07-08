import { Tab } from '../Tab/Tab';

export const RestaurantTabs = ({ restaurants, activeId, onTabClic }) => {
  return (
    <div className="tabs-container">
      {restaurants.map((restaurant) => {
        return (
          <Tab
            key={restaurant.id}
            name={restaurant.name}
            isActive={restaurant.id === activeId}
            onClick={() => onTabClic(restaurant.id)}
          />
        );
      })}
    </div>
  );
};
