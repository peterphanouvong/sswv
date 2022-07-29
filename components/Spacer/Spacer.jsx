import styles from "./Spacer.module.scss";
import cx from "classnames";

export const Spacer = ({ children, size }) => {
  return (
    <div
      className={cx(styles["ssw-spacer"], {
        [styles[`ssw-spacer--${size}`]]: size,
      })}
    >
      {children}
    </div>
  );
};
