import React, { useState } from "react";
import styles from "./TextInput.module.css";

type Props = {
  input: string;
  onChange: (e: any) => void;
};

const TextInput: React.FC<Props> = ({ input, onChange }) => {
  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          value={input}
          onChange={(e) => onChange(e.target.value)}
          maxLength={10}
        />
        <p className={styles.inputMsg}>(max 10 characters)</p>
      </div>
    </>
  );
};

export default TextInput;
