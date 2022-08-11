import { useAppContext } from "../../context/state";
import { useUser } from "../../hooks/useUser";
import { FormItem } from "../FormItem/FormItem";
import { InputField } from "../InputField/InputField.tsx";
import { Button } from "baseui/button";

const ProfileVolleyInfoForm = () => {
  const { oauthUser } = useAppContext();
  const { user, isLoading } = useUser(oauthUser?.id);

  if (isLoading) return <>loading...</>;
  return (
    <form>
      <FormItem>
        <InputField label="Voucher number" name="vnswId" />
      </FormItem>

      <FormItem>
        <InputField label="Name" name="vnswId" />
      </FormItem>

      <FormItem>
        <InputField type="date" label="Expiry date" name="vnswId" />
      </FormItem>

      <Button>Save</Button>
    </form>
  );
};

export default ProfileVolleyInfoForm;
