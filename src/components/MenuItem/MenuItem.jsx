import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { selectDishById, selectDishCountInCart } from '../../store/selectors';
import { increment, decrement } from '../../store/cart';
import { Counter } from '../Counter/Counter';
import { COUNTER_CONST_MENU } from '../../constants/counterConst';
import { useAuth } from '../../hooks/useAuth';

import styles from './MenuItem.module.css';

export const MenuItem = ({ dishId }) => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const count = useSelector((state) => selectDishCountInCart(state, dishId));
  const { user } = useAuth();

  if (!dish) return null;

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <Link to={`/dish/${dishId}`} className={styles.nameLink}>
          <span className={styles.name}>{dish.name}</span>
        </Link>
        <span className={styles.price}> {dish.price} €</span>
      </div>

      <div className={styles.controls}>
        {user && (
          <Counter
            value={count}
            onIncrement={() => dispatch(increment(dishId))}
            onDecrement={() => dispatch(decrement(dishId))}
            canIncrement={count < COUNTER_CONST_MENU.MAX}
            canDecrement={count > COUNTER_CONST_MENU.MIN}
          />
        )}
      </div>
    </li>
  );
};
