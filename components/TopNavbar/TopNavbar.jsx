import Link from "next/link";
import styles from "./TopNavbar.module.scss";
import Avatar from "../Avatar/Avatar";
import { useAppContext } from "../../context/state";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

const TopNavbar = () => {
  const { isAuthenticated, user: oauthUser } = useKindeAuth();
  const appState = useAppContext();
  const { user, isLoading } = useUser(appState.oauthUser?.id);

  useEffect(() => {
    appState.setOauthUser(oauthUser);
    appState.setIsAuthenticated(isAuthenticated);
    appState.setIsLoading(isLoading);
  }, [appState, isAuthenticated, isLoading, oauthUser]);

  return (
    <div className={styles["ssw-top-nav"]}>
      <Link href="/">SSWV</Link>
      {user ? (
        <div className={styles["ssw-top-nav__user-section"]}>
          <Link href={`/profile/${appState.oauthUser.id}`}>
            <a>
              <Avatar firstName={user.firstName} lastName={user.lastName} />
            </a>
          </Link>
          <div>
            <Link href={`/profile/${appState.oauthUser.id}`}>
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
            <Link href="/api/auth/login">Log in</Link>
          </li>

          <li className={styles["ssw-top-nav__list__item"]}>
            <Link href="/api/auth/register">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TopNavbar;
