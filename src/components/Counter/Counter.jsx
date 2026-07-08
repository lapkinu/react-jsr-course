import { COUNTER_LIMITS } from '../../constants/limits';

export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <button
        style={{ margin: '5px' }}
        className="counter__button"
        onClick={onDecrement}
        disabled={value <= COUNTER_LIMITS.MIN}
      >
        -
      </button>
      <button
        style={{ margin: '5px' }}
        className="counter__button"
        onClick={onIncrement}
        disabled={value >= COUNTER_LIMITS.MAX}
      >
        +
      </button>
    </div>
  );
};
