import styles from "./Button.module.scss";

export const Button = ({ text, type = "button", ...props }) => {
  return (
    <button className={styles["ssw-button"]} type={type} {...props}>
      {text}
    </button>
  );
};
