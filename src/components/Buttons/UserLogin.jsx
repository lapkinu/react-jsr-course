import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Common/Button';
import { LoginModal } from '../Modal/LoginModal';
import styles from './Buttons.module.css';

export const UserLogin = () => {
  const { user, login, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.controls}>
        {user ? (
          <div className={styles.userBlock}>
            <span className={styles.username}>
              {user.avatar} {user.name}
            </span>
            <Button variant="danger" onClick={logout}>
              Log out
            </Button>
          </div>
        ) : (
          <Button variant="primary" onClick={handleLoginClick}>
            Log in
          </Button>
        )}
      </div>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogin={login} />
    </>
  );
};
