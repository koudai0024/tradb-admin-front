import { defineConfig, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { join } from "path";

// https://vitejs.dev/config/

const config: UserConfig = {
  ...defineConfig,
  plugins: [reactRefresh()],
  alias: {
    "/src/": join(__dirname, "src"),
  },
};

export default config;
