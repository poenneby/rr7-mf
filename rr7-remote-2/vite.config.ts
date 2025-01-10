import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    react(),
    federation({
      name: "remote2",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./routes": "./src/routes.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router": {
          singleton: true,
          requiredVersion: dependencies["react-router"],
        },
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
