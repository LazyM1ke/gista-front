module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  proseWrap: "always",

  importOrder: [
    "^app/(.*)$",
    "^processes/(.*)$",
    "^pages/(.*)$",
    "^widgets/(.*)$",
    "^features/(.*)$",
    "^entities/(.*)$",
    "^shared/(.*)$",
    "^processes/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
