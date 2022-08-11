import { StatefulInput as Input, StatefulInputProps } from "baseui/input";
import { FormControl } from "baseui/form-control";
import React from "react";

type InputFieldProps = StatefulInputProps & {
  label: String;
};

export const InputField = ({ label, ...props }) => {
  return (
    <FormControl label={label}>
      <Input
        {...props}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              borderRadius: `${$theme.borderRadius.small}`,
            }),
          },
        }}
      />
    </FormControl>
  );
};
