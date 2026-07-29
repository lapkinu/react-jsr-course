import { useSelector, useDispatch } from 'react-redux';
import { selectDishCountInCart } from '../store/selectors';
import { increment, decrement } from '../store/cart';
import { COUNTER_CONST_MENU } from '../constants/counterConst';

export const useDishCounter = (dishId) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectDishCountInCart(state, dishId));

  return {
    value: count,
    onIncrement: () => dispatch(increment(dishId)),
    onDecrement: () => dispatch(decrement(dishId)),
    canIncrement: count < COUNTER_CONST_MENU.MAX,
    canDecrement: count > COUNTER_CONST_MENU.MIN,
  };
};
