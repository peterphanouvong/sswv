import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [oauthUser, setOauthUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AppContext.Provider
      value={{
        oauthUser,
        setOauthUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
