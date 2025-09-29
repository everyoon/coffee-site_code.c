import { useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import styles from './Button.module.css';

const Button = ({ children, to = '/', size = 'medium', iconName = null, color = 'default' }) => {
  const navigate = useNavigate();
  const IconComponent = iconName ? Icons[iconName] : null;

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className={`${styles.button} ${styles[size]} ${styles[color]}`}>
      {children}
      {IconComponent && <IconComponent className={styles.icon} />}
    </button>
  );
};

export default Button;
