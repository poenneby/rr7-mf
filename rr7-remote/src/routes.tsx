import { RouteObject } from "react-router";

export const routes = [
  {
    id: "remote",
    path: "remote",
    index: true,
    Component: () => <h1>Remote</h1>,
  },
] satisfies RouteObject[];
