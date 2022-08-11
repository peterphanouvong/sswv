import { LeftNav } from "../components/LeftNav/LeftNav";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <div className={styles["l-main-layout__inner"]}>
        <LeftNav />
        <div className={styles["l-main-layout__inner__content"]} center="true">
          {children}
        </div>
      </div>
    </div>
  );
};
