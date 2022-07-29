import { useUser } from "../../hooks/useUser";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Fieldset } from "../Fieldset/Fieldset";
import { FormItem } from "../FormItem/FormItem";
import { InputField } from "../InputField/InputField";

const ProfileVolleyInfoForm = ({ userId }) => {
  const { user, isLoading } = useUser(userId);

  if (isLoading) return <>loading...</>;
  return user.profile.activeKidsVoucher == null ? (
    <Container size="small">
      <p>
        Looks like you don't have not applied for an Active Kids voucher. If you
        want to apply for a voucher, check out our application form.
      </p>
    </Container>
  ) : (
    <form>
      <Fieldset legend="Active Kids voucher">
        <FormItem>
          <InputField label="Voucher number" name="vnswId" />
        </FormItem>

        <FormItem>
          <InputField label="Name" name="vnswId" />
        </FormItem>

        <FormItem>
          <InputField type="date" label="Expiry date" name="vnswId" />
        </FormItem>

        <Button text="Save" />
      </Fieldset>
    </form>
  );
};

export default ProfileVolleyInfoForm;
