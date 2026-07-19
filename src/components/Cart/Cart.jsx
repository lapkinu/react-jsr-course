import { useBasket } from '../../hooks/useBasket';
import { Button } from '../Common/Button';
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
      <Button variant="primary">
        🛒 Cart
        {totalItems > 0 && <span className={styles.count}>({totalItems})</span>}
      </Button>

      {totalItems > 0 && (
        <Button variant="danger" onClick={handleClearCart} title="Clear cart">
          🗑️ Clear
        </Button>
      )}
    </div>
  );
};
