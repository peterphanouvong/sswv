import { useUser } from "../../hooks/useUser";
import { useAppContext } from "../../context/state";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { InputField } from "../InputField/InputField.tsx";
import { FormItem } from "../FormItem/FormItem";

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
          initialState={{
            value: user.firstName,
          }}
          name="firstName"
          label="First name"
        />
      </FormItem>
      <FormItem>
        <InputField
          initialState={{
            value: user.lastName,
          }}
          name="lastName"
          label="Last name"
        />
      </FormItem>
      <FormItem>
        <InputField
          type="email"
          initialState={{
            value: user.email,
          }}
          name="email"
          label="Email"
        />
      </FormItem>

      <FormItem>
        <InputField
          initialState={{
            value: user.profile.vnswId,
          }}
          name="vnswId"
          label="Volleyball Australia ID"
        />
      </FormItem>

      <Button type="submit">Save</Button>
    </form>
  );
};
