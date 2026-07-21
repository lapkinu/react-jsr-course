import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/selectors';
import styles from './ReviewUser.module.css';

export const ReviewUser = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const name = user ? user.name : 'guest';

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
    </div>
  );
};
