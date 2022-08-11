import dayjs from "dayjs";
import NextLink from "next/link";
import useSWR from "swr";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { MainLayout } from "../layout/MainLayout";
import { fetcher } from "../utils/fetcher";
import { Table } from "../components/Table/Table";
import { StyledLink as Link } from "baseui/link";

import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";

const Events = () => {
  const { data: events = [], isLoading } = useSWR("/api/events", fetcher);

  return (
    <MainLayout>
      <PageHeader title="All events" />
      {isLoading ? (
        <>loading...</>
      ) : (
        <>
          <TableBuilder data={events}>
            <TableBuilderColumn header="Name">
              {(event) => (
                <NextLink href={`/event/${event.id}`}>
                  <Link href="#">{event.name}</Link>
                </NextLink>
              )}
            </TableBuilderColumn>
            <TableBuilderColumn header="Price" numeric>
              {(event) => <>${event.price}</>}
            </TableBuilderColumn>
            <TableBuilderColumn header="Location">
              {(event) => event.location}
            </TableBuilderColumn>
          </TableBuilder>
        </>
      )}
    </MainLayout>
  );
};

export default Events;
