import { InputField } from "../InputField/InputField";
import { FormItem } from "../FormItem/FormItem";
import { useUser } from "../../hooks/useUser";
import { Fieldset } from "../Fieldset/Fieldset";
import { Button } from "../Button/Button";

export const ProfileForm = ({ userId }) => {
  const { user, isLoading } = useUser(userId);

  if (isLoading) return <>loading...</>;
  return (
    <form action="/api/forms/profile" method="post">
      <input name="id" type="hidden" value={user.id} />
      <Fieldset legend="Personal information">
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
          <InputField defaultValue={user.email} name={"email"} label="Email" />
        </FormItem>

        <FormItem>
          <InputField
            defaultValue={user.profile.vnswId}
            label="Volleyball Australia ID"
            name="vnswId"
          />
        </FormItem>

        <Button type="submit" text="Save" />
      </Fieldset>
    </form>
  );
};
