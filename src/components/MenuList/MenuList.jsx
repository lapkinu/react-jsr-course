import { MenuItem } from '../MenuItem/MenuItem';
import styles from './MenuList.module.css';

export const MenuList = ({ menuIds }) => {
  if (!menuIds || menuIds.length === 0) {
    return <p className={styles.empty}>The menu is temporarily unavailable...</p>;
  }

  return (
    <section className={styles.menuList}>
      <ul>
        {menuIds.map((dishId) => (
          <MenuItem key={dishId} dishId={dishId} />
        ))}
      </ul>
    </section>
  );
};
