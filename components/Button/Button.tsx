"use client";
import styles from "./Button.module.css";

type Props = {
  btnStyles: any;
  onClick: () => void;
  children: any;
};

const Button: React.FC<Props> = ({ children, btnStyles, onClick }) => {
  return (
    <button className={btnStyles} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
