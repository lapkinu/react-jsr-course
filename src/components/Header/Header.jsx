import { Link } from 'react-router';
import { ThemeSwitcher } from '../Buttons/ThemeSwitcher';
import { UserLogin } from '../Buttons/UserLogin';
import { Cart } from '../Cart/Cart';
import { Button } from '../Common/Button';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Restaurants</h2>
      <Link to="/homepage">
        <Button>homepage</Button>
      </Link>
      <Link to="/restaurants">
        <Button>restaurants</Button>
      </Link>

      <div className={styles.actions}>
        <Cart />
        <ThemeSwitcher />
        <UserLogin />
      </div>
    </header>
  );
};
