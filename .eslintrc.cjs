module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },

  // [plugins] 사용할 eslint 플러그인 설정
  plugins: ["react", "@typescript-eslint", "prettier"],

  // [extends] 프로젝트에 적용할 eslit 규칙셋
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "on",
    "@typescript-eslint/explicit-function-return-type": "on",
    "@typescript-eslint/explicit-module-boundary-types": "on",
    "@typescript-eslint/no-explicit-any": "on",
  },
}
