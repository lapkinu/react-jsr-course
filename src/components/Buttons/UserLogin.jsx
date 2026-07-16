import { useUser } from '../../hooks/useUser';
import classNames from 'classnames';
import styles from './Buttons.module.css';

export const UserLogin = () => {
  const { user, login, logout } = useUser();

  const handleLogin = () => {
    const name = prompt('Enter your name:') || 'Guest';
    login(name);
  };

  return (
    <div className={styles.controls}>
      {user ? (
        <div className={styles.userBlock}>
          <span className={styles.username}>{user.name}</span>
          <button onClick={logout} className={classNames(styles.button, styles.logoutBtn)}>
            Выйти
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className={styles.button}>
          Войти
        </button>
      )}
    </div>
  );
};
