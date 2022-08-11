import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
import { Spacer } from "../../components/Spacer/Spacer";
import { MainLayout } from "../../layout/MainLayout";

export default function Profile() {
  return (
    <MainLayout>
      <PageHeader title="Personal details"></PageHeader>
      <Spacer />
      <ProfileForm />
    </MainLayout>
  );
}
