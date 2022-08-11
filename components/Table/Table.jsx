import React from "react";
import styles from "./Table.module.scss";

export const Table = ({ children }) => {
  return <table className={styles["ssw-table"]}>{children}</table>;
};
