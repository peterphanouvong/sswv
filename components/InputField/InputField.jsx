import { generateFormComponentId } from "../../utils/generateFormComponentId";
import styles from "./InputField.module.scss";
import cx from "classnames";

export const InputField = ({
  label,
  name,
  defaultValue,
  type = "text",
  size = "medium",
}) => {
  const id = generateFormComponentId("input_field", name, label);
  return (
    <div className={styles["ssw-input-field"]}>
      <label className={styles["ssw-input-field__label"]} htmlFor={id}>
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className={cx(styles["ssw-input-field__input"], {
          [styles[`ssw-input-field__input--${size}`]]: size,
          [styles[`ssw-input-field__input--${type}`]]: type,
        })}
        name={name}
        id={id}
        type={type}
      />
    </div>
  );
};
