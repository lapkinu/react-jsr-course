import { useBasket } from '../../hooks/useBasket';
import { Counter } from '../Counter/Counter';
import { COUNTER_CONST_MENU } from '../../constants/counterConst';

export const MenuItem = ({ dish, name, count }) => {
  const { increment, decrement } = useBasket();

  if (!dish) return null;

  return (
    <li className="menu-item">
      <span>{name}</span>
      <div className="menu-item__controls">
        <Counter
          value={count}
          onIncrement={() => increment(dish.id)}
          onDecrement={() => decrement(dish.id)}
          canIncrement={count < COUNTER_CONST_MENU.MAX}
          canDecrement={count > COUNTER_CONST_MENU.MIN}
        />
      </div>
    </li>
  );
};
