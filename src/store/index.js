import { configureStore } from '@reduxjs/toolkit';
import { restaurantsReducer } from './restaurants';
import { dishesReducer } from './dishes';
import { reviewsReduser } from './reviews';
import { usersReduser } from './users';
import { cartReduser } from './cart';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    reviews: reviewsReduser,
    users: usersReduser,
    cart: cartReduser,
  },
});
