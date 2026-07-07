import { COUNTER_LIMITS } from '../../constants/limits';

export const MenuItem = ({ dish, name, count, handleIncrement, handleDecrement }) => {
  if (!dish) return null;

  return (
    <li>
      <span>{name}</span>
      <span style={{ margin: '5px', color: 'green' }}>{count}</span>
      <div className="menu-item__controls">
        <button
          className="control-button control-button--minus"
          style={{ margin: '2px' }}
          className="control-button control-button--minus"
          onClick={() => handleDecrement(dish.id)}
          disabled={count === COUNTER_LIMITS.MIN}
        >
          -
        </button>
        <button
          className="control-button control-button--plus"
          style={{ margin: '2px' }}
          className="control-button control-button--plus"
          onClick={() => handleIncrement(dish.id)}
          disabled={count === COUNTER_LIMITS.MAX}
        >
          +
        </button>
      </div>
    </li>
  );
};
