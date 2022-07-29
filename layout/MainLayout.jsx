import TopNavbar from "../components/TopNavbar/TopNavbar";
import { Container } from "../components/Container/Container";

export const MainLayout = ({ children, isAuthenticated, oauthUser }) => {
  return (
    <div>
      <TopNavbar isAuthenticated={isAuthenticated} oauthUser={oauthUser} />
      <Container center={true}>{children}</Container>
      <hr />
      Footer
    </div>
  );
};
