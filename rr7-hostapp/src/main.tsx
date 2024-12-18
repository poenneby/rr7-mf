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
      path: "/",
    },
  ],
  {
    async patchRoutesOnNavigation({ path, patch }) {
      console.log("PATCHING REMOTE ROUTES");
      if (path.startsWith("/remote")) {
        const { routes } = await import("remote/routes");
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
