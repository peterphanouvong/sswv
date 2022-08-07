import React from "react";
import styles from "./LeftNav.module.scss";
import Link from "next/link";

export const LeftNav = ({ title, links = [] }) => {
  return (
    <div className={styles["ssw-left-nav"]}>
      <h2 className={styles["ssw-left-nav__title"]}>{title}</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
