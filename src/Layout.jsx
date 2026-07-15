import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { BasketProvider } from './context/BasketContext';

export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <ScrollProgress />
      <BasketProvider>
        <Header />
        <main className="app-content">{children}</main>
      </BasketProvider>
      <Footer />
    </div>
  );
};
