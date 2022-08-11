import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ children, ...props }) => {
  return (
    <div className={styles["ssw-tr-card"]} {...props}>
      {children}
    </div>
  );
};
