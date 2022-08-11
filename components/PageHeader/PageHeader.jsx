import { HeadingXXLarge } from "baseui/typography";
import React from "react";
import { Spacer } from "../Spacer/Spacer";

export const PageHeader = ({ title, children }) => {
  return (
    <Spacer>
      <HeadingXXLarge>{title}</HeadingXXLarge>
      {children}
    </Spacer>
  );
};
