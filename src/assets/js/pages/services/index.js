import All from "../../../../pages/services/All";
import Marketing from "../../../../pages/services/Marketing";
import Mobile from "../../../../pages/services/Mobile";
import Web from "../../../../pages/services/Web";

export const links = [
  {
    component: <All />,
    label: "Services",
    name: "All",
  },
  {
    component: <Mobile />,
    label: "Mobile Apps",
    name: "Mobile",
  },
  {
    component: <Web />,
    label: "Web Apps",
    name: "Web",
  },
  {
    component: <Marketing />,
    label: "Marketing",
    name: "Marketing",
  },
];
