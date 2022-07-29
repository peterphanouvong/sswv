import { generateFormComponentId } from "../../utils/generateFormComponentId";
import styles from "./InputField.module.scss";

export const InputField = ({ label, name, defaultValue, type = "text" }) => {
  const id = generateFormComponentId("input_field", name, label);
  return (
    <div className={styles["ssw-input-field"]}>
      <label className={styles["ssw-input-field__label"]} htmlFor={id}>
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className={styles["ssw-input-field__input"]}
        name={name}
        id={id}
        type={type}
      />
    </div>
  );
};
