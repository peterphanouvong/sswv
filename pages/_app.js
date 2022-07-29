import "../styles/globals.scss";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { AppProvider } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <KindeProvider>
        <Component {...pageProps} />
      </KindeProvider>
    </AppProvider>
  );
}

export default MyApp;
