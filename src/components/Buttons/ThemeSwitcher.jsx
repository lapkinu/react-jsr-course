import { useTheme } from '../../hooks/useTheme';
import { Button } from '../Common/Button';
import styles from './Buttons.module.css';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.controls}>
      <Button variant="primary" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
      </Button>
    </div>
  );
};
