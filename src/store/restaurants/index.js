import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../materials/normalized-mock';

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map((item) => item.id),
};

const restorantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
});

export const restaurantsReducer = restorantsSlice.reducer;
