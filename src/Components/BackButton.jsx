import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function BackButton() {
  const navigate = useNavigate();
  return (
    <div className={styles.buttons}>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}

export default BackButton;
