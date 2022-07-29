import style from "./Fieldset.module.scss";
export const Fieldset = ({ legend, description, children }) => {
  return (
    <fieldset className={style["ssw-fieldset"]}>
      <legend className={style["ssw-fieldset__legend"]}>
        <span>{legend}</span>
        {description ? (
          <span className={style["ssw-fieldset__description"]}>
            {description}
          </span>
        ) : null}
      </legend>

      {children}
    </fieldset>
  );
};
