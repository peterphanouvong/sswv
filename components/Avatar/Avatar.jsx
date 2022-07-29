import styles from "./Avatar.module.scss";
import cx from "classnames";

const Avatar = ({ firstName, lastName, size }) => {
  return (
    <div
      className={cx(styles["ssw-avatar"], {
        [styles[`ssw-avatar--${size}`]]: size,
      })}
    >
      {firstName[0]}
      {lastName ? lastName[0] : firstName[1]}
    </div>
  );
};

export default Avatar;
