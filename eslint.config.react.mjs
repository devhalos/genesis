import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import baseConfig, { config } from "./eslint.config.mjs";

export default defineConfig([
  baseConfig,
  {
    files: config.files,
    extends: [
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
  },
]);
