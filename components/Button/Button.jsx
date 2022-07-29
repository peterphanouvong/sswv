import styles from "./Button.module.scss";

export const Button = ({ text, type = "button" }) => {
  return (
    <button className={styles["ssw-button"]} type={type}>
      {text}
    </button>
  );
};
