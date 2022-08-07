import React from "react";
import cx from "classnames";
import styles from "./Headline.module.scss";

export const Headline = ({ as, children, level = 1 }) => {
  const Tag = as;
  return (
    <Tag
      className={cx({
        [styles[`ssw-headline--${level}`]]: level,
      })}
    >
      {children}
    </Tag>
  );
};
