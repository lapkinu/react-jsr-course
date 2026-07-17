import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BasketProvider } from './context/BasketContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <ThemeProvider>
        <AuthProvider>
          <BasketProvider>
            <Header />
            <main>{children}</main>
          </BasketProvider>
        </AuthProvider>
        <Footer />
      </ThemeProvider>
    </div>
  );
};
