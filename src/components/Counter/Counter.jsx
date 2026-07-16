import styles from './Counter.module.css';

export const Counter = ({
  value = 0,
  onIncrement,
  onDecrement,
  canIncrement = true,
  canDecrement = true,
}) => {
  return (
    <div className={styles.counter}>
      <button
        style={{ margin: '5px' }}
        type="button"
        className={styles.counterButton}
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
        className={styles.counterButton}
        onClick={onIncrement}
        disabled={!canIncrement}
      >
        +
      </button>
    </div>
  );
};
