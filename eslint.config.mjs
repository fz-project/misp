import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended"
  ),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;


// import { dirname } from "path"; import { fileURLToPath } from "url"; import { FlatCompat } from "@eslint/eslintrc"; const __filename = fileURLToPath(import.meta.url); const __dirname = dirname(__filename); const compat = new FlatCompat({ baseDirectory: __dirname, }); const eslintConfig = [ ...compat.extends("next/core-web-vitals"), { ignores: [ "node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", ], }, ]; export default eslintConfig;
