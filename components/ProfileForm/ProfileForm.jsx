import { InputField } from "../InputField/InputField";
import { FormItem } from "../FormItem/FormItem";
import { useUser } from "../../hooks/useUser";
import { Button } from "../Button/Button";
import { useAppContext } from "../../context/state";

export const ProfileForm = () => {
  const { oauthUser, isAuthenticated } = useAppContext();

  const { user, isLoading } = useUser(oauthUser?.id);
  if (!isAuthenticated) return <>You are not allowed to use this page!</>;
  if (isLoading) return <>loading...</>;
  return (
    <form action="/api/forms/profile" method="post">
      <input name="id" type="hidden" value={user.id} />
      <FormItem>
        <InputField
          defaultValue={user.firstName}
          name={"firstName"}
          label="First name"
        />
      </FormItem>

      <FormItem>
        <InputField
          defaultValue={user.lastName}
          name={"lastName"}
          label="Last name"
        />
      </FormItem>

      <FormItem>
        <InputField
          type="email"
          defaultValue={user.email}
          name={"email"}
          label="Email"
        />
      </FormItem>

      <FormItem>
        <InputField
          defaultValue={user.profile.vnswId}
          label="Volleyball Australia ID"
          name="vnswId"
          size="small"
        />
      </FormItem>

      <Button type="submit" text="Save" />
    </form>
  );
};
