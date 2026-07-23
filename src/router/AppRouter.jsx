import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Layout } from '../Layout';
import { RestaurantsPage } from '../pages/RestaurantsPage/RestaurantsPage';
import { RestaurantCard } from '../components/RestaurantCard/RestaurantCard';
import { MenuList } from '../components/MenuList/MenuList';
import { ReviewsList } from '../components/ReviewsList/ReviewsList';
import { HomePage } from '../pages/RestaurantsPage/HomePage/HomePage';
import { ReviewForm } from '../components/ReviewForm/ReviewForm';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="homepage" replace />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantsPage />}>
            <Route path=":restaurantId" element={<RestaurantCard />}>
              <Route index element={<Navigate to="menu" replace />} />
              <Route path="menu" element={<MenuList />} />
              <Route
                path="reviews"
                element={
                  <>
                    <ReviewsList /> <ReviewForm />
                  </>
                }
              />
            </Route>
          </Route>

          <Route path="*" element={<h2 style={{ padding: '20px' }}>404: Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
