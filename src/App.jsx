import { Layout } from './Layout';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';

export const App = () => {
  return (
    <>
      <ScrollProgress />
      <Layout>
        <RestaurantsPage title="Restaurants page" />
      </Layout>
    </>
  );
};
