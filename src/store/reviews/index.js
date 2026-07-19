import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../materials/normalized-mock';

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedReviews.map((item) => item.id),
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
});

export const reviewsReduser = reviewsSlice.reducer;
