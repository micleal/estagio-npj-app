/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginConfig} */
export default {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: "all",
  arrowParens: "always",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "clsx", "cva"],
};
