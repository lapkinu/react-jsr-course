import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Layout } from '../Layout';
import { RestaurantsPage } from '../pages/RestaurantsPage/RestaurantsPage';
import { RestaurantPage } from '../pages/RestaurantPage/RestaurantPage';
import { MenuList } from '../components/MenuList/MenuList';
import { HomePage } from '../pages/HomePage/HomePage';
import { ReviewsContainer } from '../components/ReviewsContainer/ReviewsContainer';
import { DishPage } from '../pages/DishPage/DishPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="homepage" replace />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="restaurants/:restaurantId" element={<RestaurantPage />}>
            <Route index element={<Navigate to="menu" replace />} />
            <Route path="menu" element={<MenuList />} />
            <Route path="reviews" element={<ReviewsContainer />} />
          </Route>
          <Route path="dish/:dishId" element={<DishPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
