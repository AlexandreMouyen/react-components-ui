module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "no-restricted-exports": ["error", { "restrictedNamedExports": ["default"] }]
  }
};