import styles from './Tab.module.css';

export const Tab = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tabButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </button>
  );
};
