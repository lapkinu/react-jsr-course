import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <ThemeProvider>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
        <Footer />
      </ThemeProvider>
    </div>
  );
};
