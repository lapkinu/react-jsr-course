import { createSlice } from '@reduxjs/toolkit';
import { COUNTER_CONST_MENU } from '../../constants/counterConst';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const dishId = action.payload;
      const currentCount = state[dishId] || 0;
      if (currentCount < COUNTER_CONST_MENU.MAX) {
        state[dishId] = currentCount + COUNTER_CONST_MENU.STEP;
      }
    },
    decrement: (state, action) => {
      const dishId = action.payload;
      const currentCount = state[dishId] || 0;
      if (currentCount <= COUNTER_CONST_MENU.MIN) return;

      const newCount = currentCount - COUNTER_CONST_MENU.STEP;
      if (newCount === COUNTER_CONST_MENU.MIN) {
        delete state[dishId];
      } else {
        state[dishId] = newCount;
      }
    },
    clearBasket: () => {
      return {};
    },
  },
});

export const cartReduser = cartSlice.reducer;
export const { increment, decrement, clearBasket } = cartSlice.actions;
