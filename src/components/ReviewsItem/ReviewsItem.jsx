import styles from './ReviewsItem.module.css';

export const ReviewsItem = ({ text }) => {
  return <li className={styles.item}>{text}</li>;
};
