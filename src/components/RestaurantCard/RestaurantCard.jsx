import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/selectors';
import { RestaurantCardTitle } from '../RestaurantCardTitle/RestaurantCardTitle';
// import { ReviewForm } from '../ReviewForm/ReviewForm';
// import { useAuth } from '../../hooks/useAuth';
import { NavLink, Outlet } from 'react-router';

import styles from './RestaurantCard.module.css';
import { useParams } from 'react-router';

export const RestaurantCard = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  // const { user } = useAuth();

  if (!restaurant) {
    return <p className={styles.empty}>Restaurant not found...</p>;
  }

  return (
    <article className={styles.card}>
      <RestaurantCardTitle title={restaurant.name} />

      <nav className={styles.navigation}>
        <NavLink to="menu" className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}>
          Menu
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet context={{ menuIds: restaurant.menu, reviewIds: restaurant.reviews }} />
      {/* 
      {user && <ReviewForm />} */}
    </article>
  );
};
