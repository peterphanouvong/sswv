import React from "react";
import { FormItem } from "../../components/FormItem/FormItem";
import { Input } from "baseui/input";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PermissionRoute } from "../../components/PermissionRoute/PermissionRoute";
import { MainLayout } from "../../layout/MainLayout";
import { Button } from "baseui/button";

const Create = () => {
  return (
    <PermissionRoute permission="events.create">
      <MainLayout>
        <PageHeader title="Create event">
          <p>Create an event that your players can sign up to.</p>
        </PageHeader>

        <form method="post" action="/api/forms/create-event">
          <FormItem>
            <Input type="text" label="Name" name="name" />
          </FormItem>

          <FormItem>
            <Input type="text" label="Location" name="location" size="large" />
          </FormItem>

          <FormItem>
            <Input label="Price" name="price" size="small" />
          </FormItem>

          <FormItem>
            <Input type="datetime-local" label="Start time" name="startTime" />
          </FormItem>

          <FormItem>
            <Input type="datetime-local" label="End time" name="endTime" />
          </FormItem>

          <Button type="submit">Create event</Button>
        </form>
      </MainLayout>
    </PermissionRoute>
  );
};

export default Create;
