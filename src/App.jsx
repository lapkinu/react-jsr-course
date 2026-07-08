import { RestaurantsPage } from './components/RestaurantsPage/RestaurantsPage';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title="Restaurants page" />
    </Layout>
  );
};
