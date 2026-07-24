import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/selectors';
import { RestaurantCardTitle } from '../../components/RestaurantCardTitle/RestaurantCardTitle';
import { NavLink, Outlet, Link } from 'react-router';
import { Button } from '../../components/Common/Button';

import styles from './RestaurantPage.module.css';
import { useParams } from 'react-router';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  if (!restaurant) {
    return <p className={styles.empty}>Restaurant not found...</p>;
  }

  return (
    <article className={styles.card}>
      <Link to="/restaurants">
        <Button className={styles.link}>&larr; All restaurants</Button>
      </Link>

      <RestaurantCardTitle title={restaurant.name} />

      <nav className={styles.navigation}>
        <NavLink to="menu" className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}>
          <Button className={styles.link}>Menu</Button>
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}
        >
          <Button className={styles.link}>Reviews</Button>
        </NavLink>
      </nav>
      <Outlet context={{ menuIds: restaurant.menu, reviewIds: restaurant.reviews }} />
    </article>
  );
};
