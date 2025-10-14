import { useNavigate } from "react-router-dom";
import { Icons } from "./Icons";
import styles from "./RadiusButton.module.css";

const RadiusButton = ({ to, onClick, iconName = null }) => {
  const navigate = useNavigate();
  const IconComponent = iconName ? Icons[iconName] : null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {IconComponent && <IconComponent className={styles.icon} />}
    </button>
  );
};

export default RadiusButton;
