import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BasketProvider } from './context/BasketContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <ThemeProvider>
        <UserProvider>
          <BasketProvider>
            <Header />
            <main>{children}</main>
          </BasketProvider>
        </UserProvider>
        <Footer />
      </ThemeProvider>
    </div>
  );
};
