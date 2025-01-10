import { RouteObject } from "react-router";

export const routes = [
  {
    id: "remote2",
    path: "remote2",
    index: true,
    Component: () => <h1>From remote app 2!</h1>,
  },
] satisfies RouteObject[];
