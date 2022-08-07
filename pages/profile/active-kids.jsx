import { Headline } from "../../components/Headline/Headline";
import { Spacer } from "../../components/Spacer/Spacer";
import { MainLayout } from "../../layout/MainLayout";
import ProfileVolleyInfoForm from "../../components/ProfileVolleyInfoForm/ProfileVolleyInfoForm";
import { Container } from "../../components/Container/Container";

const ActiveKids = () => {
  return (
    <MainLayout>
      <Container size="small">
        <Headline as="h1" level={2}>
          Active Kids voucher
        </Headline>
        <p>
          It looks like you have not redeemed an Active Kids voucher yet. Fill
          in the details below to make a request.
        </p>
        <Spacer />
        <ProfileVolleyInfoForm />
      </Container>
    </MainLayout>
  );
};

export default ActiveKids;
