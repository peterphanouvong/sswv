import { Headline } from "../../components/Headline/Headline";
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
import { Spacer } from "../../components/Spacer/Spacer";
import { MainLayout } from "../../layout/MainLayout";

export default function Profile() {
  return (
    <MainLayout>
      <Headline as="h1" level={2}>
        Personal details
      </Headline>
      <Spacer />
      <ProfileForm />
    </MainLayout>
  );
}
