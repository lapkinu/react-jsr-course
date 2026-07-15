import { useBasket } from '../../hooks/useBasket';

export const Cart = () => {
  const { getTotalItems, clearBasket } = useBasket();
  const totalItems = getTotalItems();

  const handleClearCart = () => {
    if (totalItems === 0) return;
    clearBasket();
  };

  return (
    <div>
      <button>
        🛒 Cart
        {totalItems > 0 && <span className="cart-count">({totalItems})</span>}
      </button>

      {totalItems > 0 && (
        <button onClick={handleClearCart} title="Clear cart">
          🗑️ Clear
        </button>
      )}
    </div>
  );
};
