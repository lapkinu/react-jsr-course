import { useState } from 'react';
import { Button } from '../Common/Button';
import styles from './LoginModal.module.css';

export const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name);
      setName('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            className={styles.input}
          />

          <div className={styles.actions}>
            <Button type="button" variant="danger" onClick={onClose}>
              cancel
            </Button>
            <Button type="submit" variant="primary">
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
