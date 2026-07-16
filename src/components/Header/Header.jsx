import { ThemeSwitcher } from '../Buttons/ThemeSwitcher';
import { UserLogin } from '../Buttons/UserLogin';
import { Cart } from '../Cart/Cart';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Restaurants</h2>

      <div className={styles.actions}>
        <Cart />

        <ThemeSwitcher />

        <UserLogin />
      </div>
    </header>
  );
};
