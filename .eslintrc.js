// module.exports = {
// 	"extends" : "airbnb",
// 	"parser" : "babel-eslint",
// 	"plugins" : [
// 		"react",
// 		"jsx-a11y",
// 		"import"
// 	],
// 	"rules": {
// 		"react/jsx-filename-extension": 0,
// 		"no-use-before-define": 0,
// 		"no-console": 0,
// 		"func-names": 0,
// 		"no-undef": 0,
// 		"no-unused-vars": 0,
// 		"strict": 0,
// 		"dot-notation": 0,
// 		"import/extensions": 0,
// 		"no-useless-constructor": 0,
// 		"react/prefer-stateless-function": 0,
// 		"react/prop-types": 0,
// 		"react/destructuring-assignment": 0,
// 		"react/no-array-index-key": 0,
// 		"react/no-did-update-set-state": 0,
// 		"no-restricted-syntax": 0,
// 		"react/forbid-prop-types": 0,
// 		"react/no-access-state-in-setstate": 0,
// 		"react/jsx-no-duplicate-props": 0,
// 		"no-param-reassign": 0,
// 		"no-unused-expressions": 0,
// 		"import/no-unresolved": 0,
// 		"react/no-unused-state": 0,
// 		"no-shadow": 0,
// 		"no-return-assign": 0,
// 		"class-methods-use-this": 0,
// 		"brace-style": [2, "stroustrup"],
// 		"react/sort-comp": [2, {
// 			order: [
// 				"lifecycle",
// 				"everything-else",
// 				"rendering",
// 			]
// 		}]
// 	}
// };

module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
  },
  plugins: [
    // "@typescript-eslint",
    "react",
    "jsx-a11y",
    "import",
    "jest",
    "react-hooks",
  ],
  rules: {
    "arrow-body-style": 0,
    "react/jsx-filename-extension": 0,
    "comma-dangle": 0,
    "no-use-before-define": 0,
    "no-console": 0,
    "func-names": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    strict: 0,
    "dot-notation": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "max-len": 0,
    "no-useless-constructor": 0,
    "no-underscore-dangle": 0,
    quotes: 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/no-array-index-key": 0,
    "react/no-did-update-set-state": 0,
    "no-restricted-syntax": 0,
    "react/forbid-prop-types": 0,
    "react/no-access-state-in-setstate": 0,
    "react/jsx-no-duplicate-props": 0,
    "no-plusplus": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "import/no-unresolved": 0,
    "react/no-unused-state": 0,
    "no-shadow": 0,
    "no-return-assign": 0,
    "class-methods-use-this": 0,
    "brace-style": [2, "stroustrup"],
    "react/sort-comp": [
      2,
      {
        order: ["lifecycle", "everything-else", "rendering"],
      },
    ],
  },
  // setting: {
  //   "import/parsers": {
  //     "@typescript-eslint/parser": [".ts", ".tsx"],
  //   },
  //   "import/resolver": {
  //     typescript: {
  //       alwaysTryTypes: true,
  //     },
  //   },
  // },
};
