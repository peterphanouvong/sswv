import React from "react";
import { Headline } from "../../components/Headline/Headline";
import { MainLayout } from "../../layout/MainLayout";
import { Button } from "baseui/button";

const Event = ({ event }) => {
  console.log(event);
  return (
    <MainLayout>
      <Headline level={2} as="h1">
        {event.name}
      </Headline>

      <Headline as="h2" level={3}>
        Event details
      </Headline>
      <dl>
        <dt>Price</dt>
        <dd>{event.price}</dd>

        <dt>Location</dt>
        <dd>{event.location}</dd>

        <dt>Start time</dt>
        <dd>{event.startTime}</dd>

        <dt>End time</dt>
        <dd>{event.endTime}</dd>
      </dl>

      <Button>Join event</Button>
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/event/${params.id}`);
  const event = await res.json();
  console.log(event);

  return {
    props: {
      event: event,
    },
  };
}

export default Event;
