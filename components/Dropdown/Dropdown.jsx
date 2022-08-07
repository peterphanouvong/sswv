import { useState } from "react";
import styles from "./Dropdown.module.scss";
import cx from "classnames";
export const Dropdown = ({ children, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const DropdownContent = dropdownContent;
  return (
    <>
      <div
        className={cx(styles["ssw-dropdown"], {
          [styles["ssw-dropdown--is-active"]]: isOpen,
        })}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        {isOpen ? <DropdownContent /> : null}
      </div>
    </>
  );
};

export const DropdownMenu = ({ children }) => {
  return <div className={styles["ssw-dropdown-menu"]}>{children}</div>;
};
