import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import-x";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tsParser from "@typescript-eslint/parser";

export const config = {
  files: ["**/*.{ts,tsx}"],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    eslintPluginPrettierRecommended,
  ],
  languageOptions: {
    globals: globals.browser,
    parser: tsParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "import-x/order": ["error"],
  },
};

export default defineConfig([globalIgnores(["dist"]), config]);
