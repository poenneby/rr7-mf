import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import * as rootRoute from "./App";

const router = createBrowserRouter(
  [
    {
      ...rootRoute,
      id: "root",
      children: [{ path: "/", element: <h1>Home</h1> }],
    },
  ],
  {
    async patchRoutesOnNavigation({ path, patch }) {
      if (path.startsWith("/remote")) {
        const { routes } = await import("remote/routes");
        patch("root", routes);
      }
      if (path.startsWith("/remote2")) {
        const { routes } = await import("remote2/routes");
        patch("root", routes);
      }
      // TODO: Add more remotes here
    },
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
