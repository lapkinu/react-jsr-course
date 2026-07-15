import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';

export function useBasket() {
  const context = useContext(BasketContext);

  if (context === undefined) {
    throw new Error('useBasket must be used inside the BasketProvider');
  }

  return context;
}
