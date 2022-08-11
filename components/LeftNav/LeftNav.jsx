import React, { useEffect } from "react";
import styles from "./LeftNav.module.scss";
import Link from "next/link";
import { useAppContext } from "../../context/state";
import { useNavContext } from "../../context/navState";
import { useRouter } from "next/router";
import { getPathnameRoot } from "../../utils/getPathnameRoot";
import {
  eventsLinks,
  profileLinks,
  eventDetailsLinks,
  homeLinks,
} from "../../utils/leftNavLinks";

export const LeftNav = () => {
  const { isLoading, permissions } = useAppContext();
  const { title, links, backLink, setTitle, setLinks, setBackLink } =
    useNavContext();

  const router = useRouter();
  useEffect(() => {
    switch (getPathnameRoot(router.pathname)) {
      case "profile":
        setTitle("My profile");
        setLinks(profileLinks);
        break;
      case "events":
        setTitle("Events");
        setLinks(eventsLinks);
        setBackLink({
          text: "Home",
          href: "/",
        });
        break;
      case "event":
        setTitle("Event details");
        setLinks(eventDetailsLinks);
        setBackLink({
          text: "Events",
          href: "/events",
        });
        break;
      default:
        setTitle("SSWV");
        setLinks(homeLinks);
        break;
    }
  }, [router.pathname]);

  return (
    <div className={styles["ssw-left-nav"]}>
      {title != "SSWV" ? (
        <Link href={backLink.href}>
          <a className={styles["ssw-left-nav__back"]}>{backLink.text}</a>
        </Link>
      ) : null}
      <h2 className={styles["ssw-left-nav__title"]}>{title}</h2>
      <ul>
        {links.map((link, i) => {
          if (link.permission) {
            if (!permissions.includes(link.permission)) {
              return <></>;
            }
          }
          return (
            <li key={i}>
              <Link
                href={{
                  pathname: link.pathname || "",
                  query: { ...router.query },
                }}
              >
                <a>{link.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
