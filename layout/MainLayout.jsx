import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LeftNav } from "../components/LeftNav/LeftNav";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { useAppContext } from "../context/state";
import { getPathnameRoot } from "../utils/getPathnameRoot";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, user: oauthUser, isLoading } = useKindeAuth();
  console.log(oauthUser);
  const appState = useAppContext();

  let title = "SSWV";
  let links = [
    {
      name: "Home",
      to: `/`,
    },
    {
      name: "Events",
      to: `/events`,
    },
    {
      name: "Memberships",
      to: "/memberships",
    },
    {
      name: "Packages",
      to: "/packages",
    },
  ];

  useEffect(() => {
    appState.setOauthUser(oauthUser);
    appState.setIsAuthenticated(isAuthenticated);
    appState.setIsLoading(isLoading);
  }, [appState, isAuthenticated, isLoading, oauthUser]);

  useEffect(() => {
    const createUserIfNeeded = async () => {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appState.oauthUser),
      }).then(async (res) => {
        return await res.json();
      });
    };
    if (appState.oauthUser) {
      createUserIfNeeded();
    }
  }, [appState.oauthUser]);

  const profileLinks = [
    { name: "Personal information", to: `/profile` },
    {
      name: "Active Kids voucher",
      to: `/profile/active-kids`,
    },
  ];

  switch (getPathnameRoot(router.pathname)) {
    case "profile":
      title = "My profile";
      links = profileLinks;
      break;
    default:
      break;
  }

  if (isLoading) return <>loading...</>;

  return (
    <div>
      <TopNavbar />
      <div className={styles["l-main-layout__inner"]}>
        <LeftNav title={title} links={links} />
        <div className={styles["l-main-layout__inner__content"]} center="true">
          {children}
        </div>
      </div>
    </div>
  );
};
