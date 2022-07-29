import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { useAppContext } from "../../context/state";
import { useUser } from "../../hooks/useUser";
import Avatar from "../../components/Avatar/Avatar";
import { Container } from "../../components/Container/Container";
import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
import { Spacer } from "../../components/Spacer/Spacer";
import ProfileVolleyInfoForm from "../../components/ProfileVolleyInfoForm/ProfileVolleyInfoForm";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  const appState = useAppContext();
  const { user, isLoading } = useUser(id);

  useEffect(() => {
    const createUserIfNeeded = async () => {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appState.oauthUser),
      }).then(async (res) => {
        return await res.json();
      });
    };
    if (appState.oauthUser) {
      createUserIfNeeded();
    }
  }, [appState.oauthUser]);

  if (isLoading) return <>loading...</>;
  return (
    <MainLayout>
      <Container>
        <Avatar
          firstName={user.firstName}
          lastName={user.lastName}
          size="large"
        />
        <ProfileForm userId={user.id} />
        <ProfileVolleyInfoForm userId={user.id} />
      </Container>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>{user.email}</p>
      <p>Joined: {user.createdAt}</p>
      <p>vnsw id: {user.profile.vsnwId}</p>

      {/* <form action="/api/forms/profile" method="post">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={oauthUser.first_name}
        />

        <br />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={oauthUser.last_name}
        />

        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={oauthUser.preferred_email}
        />

        <button type="submit">Submit</button>
      </form> */}
    </MainLayout>
  );
}
