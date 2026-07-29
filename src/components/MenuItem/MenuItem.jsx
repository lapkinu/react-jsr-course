import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectDishById } from '../../store/selectors';
import { Counter } from '../Counter/Counter';
import { useAuth } from '../../hooks/useAuth';
import { useDishCounter } from '../../hooks/useDishCounter';

import styles from './MenuItem.module.css';

export const MenuItem = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { user } = useAuth();

  const counterProps = useDishCounter(dishId);

  if (!dish) return null;

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <Link to={`/dish/${dishId}`} className={styles.nameLink}>
          <span className={styles.nameLink}>{dish.name}</span>
        </Link>
        <span className={styles.price}> {dish.price} €</span>
      </div>

      <div className={styles.controls}>{user && <Counter {...counterProps} />}</div>
    </li>
  );
};
