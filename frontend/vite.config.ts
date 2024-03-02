import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix({
    ssr: false,
  }), tsconfigPaths()],
  ssr: {
    noExternal: ["react-tweet"]
  }
});
