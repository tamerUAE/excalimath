import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.IS_PREACT": JSON.stringify("false"),
  },
  resolve: {
    alias: {
      "@excalimath/core": path.resolve(__dirname, "../../packages/core/src/index.ts"),
    },
  },
});
