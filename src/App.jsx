import { Layout } from './Layout';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title="Restaurants page" />
    </Layout>
  );
};
