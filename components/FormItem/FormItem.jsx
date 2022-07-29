import styles from "./FormItem.module.scss";

export const FormItem = ({ children }) => {
  return <div className={styles["ssw-form-item"]}>{children}</div>;
};
