import { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useKindeToken } from "../hooks/useKindeToken";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const {
    isAuthenticated: _isAuthenticated,
    user: _oauthUser,
    isLoading: _isLoading,
  } = useKindeAuth();
  const { token: _token } = useKindeToken();

  const [oauthUser, setOauthUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [kindeToken, setKindeToken] = useState();
  const [accessToken, setAccessToken] = useState();

  const permissions = accessToken?.permissions || [];
  const orgCode = accessToken?.org_code || "";

  useEffect(() => {
    if (kindeToken) {
      setAccessToken(jwt.decode(kindeToken.access_token));
    }
  }, [kindeToken]);

  useEffect(() => {
    if (
      _oauthUser != undefined &&
      _isAuthenticated != undefined &&
      _isLoading != undefined &&
      _token != undefined
    ) {
      setOauthUser(_oauthUser);
      setIsAuthenticated(_isAuthenticated);
      setIsLoading(_isLoading);
      setKindeToken(_token);
    }
  }, [_isAuthenticated, _isLoading, _oauthUser, _token]);

  useEffect(() => {
    const createUserIfNeeded = async () => {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oauthUser),
      }).then(async (res) => {
        return await res.json();
      });
    };
    if (oauthUser) {
      createUserIfNeeded();
    }
  }, [oauthUser]);

  return (
    <AppContext.Provider
      value={{
        oauthUser,
        setOauthUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        setKindeToken,
        accessToken,
        permissions,
        orgCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
