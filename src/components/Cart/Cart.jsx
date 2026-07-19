import { useSelector, useDispatch } from 'react-redux';
import { selectTotalCartItems } from '../../store/selectors';
import { clearBasket } from '../../store/cart';
import { Button } from '../Common/Button';
import styles from './Cart.module.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectTotalCartItems);

  return (
    <div className={styles.cart}>
      <Button variant="primary">
        🛒 Cart
        {totalItems > 0 && <span className={styles.count}>({totalItems})</span>}
      </Button>

      {totalItems > 0 && (
        <Button variant="danger" onClick={() => dispatch(clearBasket())} title="Clear all items">
          🗑️ Clear
        </Button>
      )}
    </div>
  );
};
