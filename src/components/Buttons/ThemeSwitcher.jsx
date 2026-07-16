import { useTheme } from '../../hooks/useTheme';
import classNames from 'classnames';
import styles from './Buttons.module.css';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.controls}>
      <button onClick={toggleTheme} className={classNames(styles.button, styles.themeBtn)}>
        {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
      </button>
    </div>
  );
};
