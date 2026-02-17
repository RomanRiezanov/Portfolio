import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React and external libraries
            ["^react", "^@?\\w"],

            // Absolute alias imports — screens, hooks, data
            ["^@/screens(/.*)?$"],
            ["^@/hooks(/.*)?$"],
            ["^@/"],

            // Relative imports (non-style)
            ["^\\.(?!.*\\.s?css$)"],

            // Style imports (CSS / SCSS)
            ["\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  }
);
