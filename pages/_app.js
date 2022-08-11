import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { NavProvider } from "../context/navState";
import { AppProvider } from "../context/state";
import "../styles/globals.scss";
import { styletron } from "../styletron.ts";
import { theme } from "../theme.ts";

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={theme}>
        <KindeProvider>
          <AppProvider>
            <NavProvider>
              <Component {...pageProps} />
            </NavProvider>
          </AppProvider>
        </KindeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
