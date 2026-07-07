import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">{children}</main>
      <Footer />
    </div>
  );
};
