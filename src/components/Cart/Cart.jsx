import { useBasket } from '../../hooks/useBasket';

import styles from './Cart.module.css';

export const Cart = () => {
  const { getTotalItems, clearBasket } = useBasket();

  const totalItems = getTotalItems();

  const handleClearCart = () => {
    if (totalItems === 0) return;

    clearBasket();
  };

  return (
    <div className={styles.cart}>
      <button className={styles.button}>
        🛒 Cart
        {totalItems > 0 && <span className={styles.count}>({totalItems})</span>}
      </button>

      {totalItems > 0 && (
        <button className={styles.clear} onClick={handleClearCart} title="Clear cart">
          🗑️ Clear
        </button>
      )}
    </div>
  );
};
