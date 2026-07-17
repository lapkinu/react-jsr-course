import classNames from 'classnames';
import styles from './Button.module.css';

export const Button = ({ variant = 'primary', size = 'medium', className, children, ...props }) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
