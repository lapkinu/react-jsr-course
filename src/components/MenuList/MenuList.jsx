import { useBasket } from '../../hooks/useBasket';
import { MenuItem } from '../MenuItem/MenuItem';

import styles from './MenuList.module.css';

export const MenuList = ({ menuItems }) => {
  const { basket } = useBasket();

  if (!menuItems || menuItems.length === 0) {
    return (
      <p className={styles.empty}>The menu of this restaurant is temporarily unavailable...</p>
    );
  }

  return (
    <section className={styles.menuList}>
      <ul>
        {menuItems.map((dish) => {
          const currentCount = basket[dish.id] || 0;
          return <MenuItem key={dish.id} name={dish.name} dish={dish} count={currentCount} />;
        })}
      </ul>
    </section>
  );
};
