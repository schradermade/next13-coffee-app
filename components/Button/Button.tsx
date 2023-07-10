"use client";
import styles from "./Button.module.css";

type Props = {
  label: string;
  clickHandler: () => void;
};

const Button: React.FC<Props> = ({ label, clickHandler }) => {
  return (
    <button className={styles.upvoteButton} onClick={() => clickHandler()}>
      {label}
    </button>
  );
};

export default Button;
