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
        type="button"
        className={styles.counterButton}
        onClick={onDecrement}
        disabled={!canDecrement}
      >
        -
      </button>

      <span className={styles.value}>{value}</span>

      <button
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
