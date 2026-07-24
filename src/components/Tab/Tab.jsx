import { NavLink } from 'react-router';
import styles from './Tab.module.css';

export const Tab = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${styles.tabButton} ${isActive ? styles.active : ''}`}
    >
      {name}
    </NavLink>
  );
};
