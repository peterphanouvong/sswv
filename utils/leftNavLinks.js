export const homeLinks = [
  {
    name: "Home",
    pathname: `/`,
  },
  {
    name: "Events",
    pathname: `/events`,
  },
  {
    name: "Memberships",
    pathname: "/memberships",
  },
  {
    name: "Packages",
    pathname: "/packages",
  },
];

export const profileLinks = [
  { name: "Personal information", pathname: `/profile` },
  {
    name: "Active Kids voucher",
    pathname: "/profile/active-kids",
  },
];

export const eventsLinks = [
  { name: "View events", pathname: `/events` },
  {
    name: "Create event",
    pathname: "/events/create",
    permission: "events.create",
  },
];

export const eventDetailsLinks = [
  { name: "Details", pathname: "/event/[id]" },
  {
    name: "Attendees",
    pathname: "/event/[id]/attendees",
  },
  {
    name: "Join",
    pathname: "/event/[id]/join",
  },
];
