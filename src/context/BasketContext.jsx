import { createContext, useReducer, useCallback } from 'react';
import { incrementKey, decrementKey } from '../utils/counterUtils';

const BasketContext = createContext(undefined);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CLEAR = 'CLEAR';

const basketReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return incrementKey(state, action.payload);
    case DECREMENT:
      return decrementKey(state, action.payload);
    case CLEAR:
      return {};
    default:
      return state;
  }
};

export function BasketProvider({ children }) {
  const [basket, dispatch] = useReducer(basketReducer, {});

  const increment = useCallback((dishId) => {
    dispatch({ type: INCREMENT, payload: dishId });
  }, []);

  const decrement = useCallback((dishId) => {
    dispatch({ type: DECREMENT, payload: dishId });
  }, []);

  const clearBasket = useCallback(() => {
    dispatch({ type: CLEAR });
  }, []);

  const getTotalItems = useCallback(() => {
    return Object.values(basket).reduce((sum, qty) => sum + qty, 0);
  }, [basket]);

  return (
    <BasketContext.Provider
      value={{
        basket,
        increment,
        decrement,
        clearBasket,
        getTotalItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export { BasketContext };
