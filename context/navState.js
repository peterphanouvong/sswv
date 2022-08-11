import { createContext, useContext, useState } from "react";
import {
  profileLinks,
  eventsLinks,
  eventDetailsLinks,
  homeLinks,
} from "../utils/leftNavLinks";
import { getPathnameRoot } from "../utils/getPathnameRoot";
import { useRouter } from "next/router";

export const NavContext = createContext();

export function NavProvider({ children }) {
  const [title, setTitle] = useState("SSWV");
  const [links, setLinks] = useState(homeLinks);
  const [backLink, setBackLink] = useState({
    text: "home",
    href: "/",
  });

  return (
    <NavContext.Provider
      value={{ links, setLinks, title, setTitle, backLink, setBackLink }}
    >
      {children}
    </NavContext.Provider>
  );
}
export function useNavContext() {
  return useContext(NavContext);
}
