import { useBasket } from '../../hooks/useBasket';
import { Counter } from '../Counter/Counter';
import { COUNTER_CONST_MENU } from '../../constants/counterConst';
import { useAuth } from '../../hooks/useAuth';

import styles from './MenuItem.module.css';

export const MenuItem = ({ dish, name, count }) => {
  const { increment, decrement } = useBasket();
  const { user } = useAuth();

  if (!dish) return null;

  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>

      <div className={styles.controls}>
        {user && (
          <Counter
            value={count}
            onIncrement={() => increment(dish.id)}
            onDecrement={() => decrement(dish.id)}
            canIncrement={count < COUNTER_CONST_MENU.MAX}
            canDecrement={count > COUNTER_CONST_MENU.MIN}
          />
        )}
      </div>
    </li>
  );
};
