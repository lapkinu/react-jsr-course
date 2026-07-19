export const selectRestaurantIds = (state) => state.restaurants.ids;

export const selectRestaurantById = (state, id) => state.restaurants.entities[id];

export const selectDishById = (state, id) => state.dishes.entities[id];

export const selectReviewById = (state, id) => state.reviews.entities[id];

export const selectUserById = (state, id) => state.users.entities[id];

export const selectDishCountInCart = (state, dishId) => state.cart[dishId] || 0;

export const selectTotalCartItems = (state) =>
  Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
