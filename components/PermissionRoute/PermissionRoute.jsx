import React from "react";
import { useAppContext } from "../../context/state";
import { MainLayout } from "../../layout/MainLayout";

export const PermissionRoute = ({ permission, children }) => {
  const { isLoading, permissions } = useAppContext();

  if (isLoading) return <>loading...</>;
  return permissions.includes(permission) ? (
    <>{children}</>
  ) : (
    <MainLayout>
      Sorry you do not have the permissions to access this page.
    </MainLayout>
  );
};
