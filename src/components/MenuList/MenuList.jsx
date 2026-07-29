import { useOutletContext } from 'react-router';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuTitle } from '../MenuTitle/MenuTitle';
import styles from './MenuList.module.css';

export const MenuList = () => {
  const { menuIds } = useOutletContext();

  if (!menuIds || menuIds.length === 0) {
    return (
      <p className={styles.empty}>The menu of this restaurant is temporarily unavailable...</p>
    );
  }

  return (
    <>
      <MenuTitle title="Menu" />
      <section className={styles.menuList}>
        <ul>
          {menuIds.map((dishId) => (
            <MenuItem key={dishId} dishId={dishId} />
          ))}
        </ul>
      </section>
    </>
  );
};
