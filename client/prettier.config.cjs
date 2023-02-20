// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "all",
  "singleQuote": true,
  "semi": true,
  "importOrder": ["^@internals/(.*)$", "^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  "importOrderBuiltinModulesToTop": true,
  "importOrderCaseInsensitive": true,
  "importOrderParserPlugins": ["typescript", "jsx", "decorators-legacy"],
  "importOrderMergeDuplicateImports": true,
  "importOrderCombineTypeAndValueImports": true,
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
}