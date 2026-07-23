import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <>
      <ScrollProgress />
      <AppRouter />
    </>
  );
};
