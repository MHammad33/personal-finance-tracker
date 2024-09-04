import globals from "globals";
import eslint from "@eslint/js";
import plugin from "@stylistic/eslint-plugin-js";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: { sourceType: "module" },
    plugins: {
      "@stylistic/js": plugin
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "windows"],
      "@stylistic/js/quotes": ["error", "double"],
      "@stylistic/js/semi": ["error"],

      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }]
    }
  },
  { languageOptions: { globals: globals.node } },
  {
    ignores: ["node_modules/**/*", "dist/**/*"]
  }
];
