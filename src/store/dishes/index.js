import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../materials/normalized-mock';

const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedDishes.map((item) => item.id),
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
});

export const dishesReducer = dishesSlice.reducer;
