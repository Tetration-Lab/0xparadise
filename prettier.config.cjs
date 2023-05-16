/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
    "printWidth": 120,
    "semi": false,
    "tabWidth": 2,
    "useTabs": false,
    "singleQuote": true,
    "trailingComma": "all",
};

module.exports = config;
