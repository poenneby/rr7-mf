import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "host",
      manifest: true,
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:3001/remoteEntry.js",
        },
        remote2: {
          type: "module",
          name: "remote2",
          entry: "http://localhost:3002/remoteEntry.js",
        },
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
