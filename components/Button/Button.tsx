"use client";
import styles from "./Button.module.css";

type Props = {
  btnStyles: any;
  onClick: () => void;
  children: any;
  btnDisable?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  btnStyles,
  btnDisable,
  onClick,
}) => {
  return (
    <button
      disabled={btnDisable}
      className={btnStyles}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
