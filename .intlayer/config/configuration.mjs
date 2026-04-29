const internationalization = {
  "locales": [
    "fr",
    "en"
  ],
  "requiredLocales": [
    "fr",
    "en"
  ],
  "strictMode": "inclusive",
  "defaultLocale": "fr"
};
const routing = {
  "mode": "prefix-no-default",
  "storage": {
    "cookies": [
      {
        "name": "INTLAYER_LOCALE",
        "attributes": {}
      }
    ],
    "headers": [
      {
        "name": "x-intlayer-locale"
      }
    ]
  },
  "basePath": ""
};
const editor = {
  "editorURL": "http://localhost:8000",
  "cmsURL": "https://app.intlayer.org",
  "backendURL": "https://back.intlayer.org",
  "port": 8000,
  "enabled": false,
  "dictionaryPriorityStrategy": "local_first",
  "liveSync": true,
  "liveSyncPort": 4000,
  "liveSyncURL": "http://localhost:4000"
};
const log = {
  "mode": "default",
  "prefix": "\u001b[38;5;239m[intlayer] \u001b[0m"
};
const system = {
  "baseDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon",
  "moduleAugmentationDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/types",
  "unmergedDictionariesDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/unmerged_dictionary",
  "remoteDictionariesDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/remote_dictionary",
  "dictionariesDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/dictionary",
  "dynamicDictionariesDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/dynamic_dictionary",
  "fetchDictionariesDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/fetch_dictionary",
  "typesDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/types",
  "mainDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/main",
  "configDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/config",
  "cacheDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/cache",
  "tempDir": "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon/.intlayer/tmp"
};
const content = {
  "fileExtensions": [
    ".content.ts",
    ".content.js",
    ".content.cjs",
    ".content.mjs",
    ".content.json",
    ".content.json5",
    ".content.jsonc",
    ".content.tsx",
    ".content.jsx"
  ],
  "contentDir": [
    "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon"
  ],
  "codeDir": [
    "/Users/leticiabi/Desktop/MesProjets/HuilinGUO_Histia_technical_test/histia-coming-soon"
  ],
  "excludedPath": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.intlayer/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.expo/**",
    "**/.vercel/**",
    "**/.turbo/**",
    "**/.tanstack/**"
  ],
  "watch": true
};
const ai = {};
const dictionary = {
  "fill": true,
  "contentAutoTransformation": false,
  "location": "local",
  "importMode": "static"
};
const build = {
  "mode": "auto",
  "minify": false,
  "purge": false,
  "traversePattern": [
    "**/*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/build/**",
    "!**/.intlayer/**",
    "!**/.next/**",
    "!**/.nuxt/**",
    "!**/.expo/**",
    "!**/.vercel/**",
    "!**/.turbo/**",
    "!**/.tanstack/**",
    "!**/*.config.*",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/*.stories.*",
    "!**/*.d.ts",
    "!**/*.d.ts.map",
    "!**/*.map"
  ],
  "outputFormat": [
    "esm",
    "cjs"
  ],
  "cache": true,
  "checkTypes": false
};
const compiler = {
  "enabled": true,
  "dictionaryKeyPrefix": "",
  "noMetadata": false,
  "saveComponents": false
};
const configuration = { internationalization, routing, editor, log, system, content, ai, dictionary, build, compiler };

export { internationalization, routing, editor, log, system, content, ai, dictionary, build, compiler, configuration };
export default configuration;
