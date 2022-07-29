import { MainLayout } from "../layout/MainLayout";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { useAppContext } from "../context/state";

export default function Home() {
  const { isAuthenticated, isLoading, user: oauthUser } = useKindeAuth();
  const appState = useAppContext();

  useEffect(() => {
    appState.setOauthUser(oauthUser);
    appState.setIsAuthenticated(isAuthenticated);
    appState.setIsLoading(isLoading);
  }, [appState, isAuthenticated, isLoading, oauthUser]);

  if (isLoading) return <>loading...</>;

  return <MainLayout>Hello world</MainLayout>;
}
