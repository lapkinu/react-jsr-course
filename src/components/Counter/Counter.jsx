export const Counter = ({
  value = 0,
  onIncrement,
  onDecrement,
  canIncrement = true,
  canDecrement = true,
}) => {
  return (
    <div className="counter">
      <button
        style={{ margin: '5px' }}
        type="button"
        className="counter__button"
        onClick={onDecrement}
        disabled={!canDecrement}
      >
        -
      </button>

      <span style={{ color: 'green' }} className="counter__value">
        {value}
      </span>

      <button
        style={{ margin: '5px' }}
        type="button"
        className="counter__button"
        onClick={onIncrement}
        disabled={!canIncrement}
      >
        +
      </button>
    </div>
  );
};
