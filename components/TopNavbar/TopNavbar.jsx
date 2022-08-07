import Link from "next/link";
import styles from "./TopNavbar.module.scss";
import Avatar from "../Avatar/Avatar";
import { useAppContext } from "../../context/state";
import { useUser } from "../../hooks/useUser";

const TopNavbar = () => {
  const appState = useAppContext();
  const { user } = useUser(appState.oauthUser?.id);

  return (
    <div className={styles["ssw-top-nav"]}>
      <Link href="/">SSWV</Link>
      {user ? (
        <div className={styles["ssw-top-nav__user-section"]}>
          <Link href={`/profile`}>
            <a>
              <Avatar firstName={user.firstName} lastName={user.lastName} />
            </a>
          </Link>
          <div>
            <Link href={`/profile`}>
              <a className={styles["ssw-top-nav__user-section__name"]}>
                {user.firstName} {user.lastName}
              </a>
            </Link>
            <Link href="/api/auth/logout">
              <a className={styles["ssw-top-nav__user-section__sign-out"]}>
                Sign out
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <ul className={styles["ssw-top-nav__list"]}>
          <li className={styles["ssw-top-nav__list__item"]}>
            <Link
              href={{
                pathname: "/api/auth/login",
                query: {
                  org_code: "org_adb7e115b77",
                },
              }}
            >
              Log in
            </Link>
          </li>

          <li className={styles["ssw-top-nav__list__item"]}>
            <Link
              href={{
                pathname: "/api/auth/register",
                query: { org_code: "org_adb7e115b77" },
              }}
            >
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TopNavbar;
