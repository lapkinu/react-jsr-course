import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </AuthProvider>
      <Footer />
    </ThemeProvider>
  );
};
