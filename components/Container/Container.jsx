import styles from "./Container.module.scss";
import cx from "classnames";
export const Container = ({ children, size, center }) => {
  return (
    <div
      className={cx(styles["ssw-container"], {
        [styles["ssw-container--center"]]: center,
        [styles[`ssw-container--${size}`]]: size,
      })}
    >
      {children}
    </div>
  );
};
