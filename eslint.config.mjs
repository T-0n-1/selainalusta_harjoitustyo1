import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  			{ ignores: ["venv/", ".idea/", ".git/", "node_modules/", ".vscode", ".DS_Store", "config.codekit3", ".gitignore", "dist/", "Thumbs.db", ".eslintcache", ".env", "tsconfig.json", "test/", "*.mjs", "*.min.js"] },  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];