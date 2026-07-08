import { Counter } from '../Counter/Counter';

export const MenuItem = ({ dish, name, count, handleIncrement, handleDecrement }) => {
  if (!dish) {
    return null;
  }

  const handlePlus = () => handleIncrement(dish.id);
  const handleMinus = () => handleDecrement(dish.id);

  return (
    <li>
      <span>{name}</span>
      <span style={{ margin: '5px', color: 'green' }}>{count}</span>
      <div className="menu-item__controls">
        <Counter value={count} onIncrement={handlePlus} onDecrement={handleMinus} />
      </div>
    </li>
  );
};
