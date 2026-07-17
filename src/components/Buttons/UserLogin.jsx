import { useUser } from '../../hooks/useUser';
import { Button } from '../Common/Button';
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
          <Button variant="danger" onClick={logout}>
            Выйти
          </Button>
        </div>
      ) : (
        <Button variant="primary" onClick={handleLogin}>
          Войти
        </Button>
      )}
    </div>
  );
};
