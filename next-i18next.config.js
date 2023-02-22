const HttpBackend = require("i18next-http-backend/cjs");
const ChainedBackend = require("i18next-chained-backend").default;
const LocalStorageBackend = require("i18next-localstorage-backend").default;

module.exports = {
  backend: {
    backendOptions: [{ expirationTime: 0 }],
    backends:
      typeof window !== "undefined" ? [LocalStorageBackend, HttpBackend] : [],
  },
  serializeConfig: false,
  use: typeof window !== "undefined" ? [ChainedBackend] : [],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  defaultNs: "common",
  react: {
    // Set useSuspense to true, and remove Suspense componentfrom _app.tsx, and you will not need the getStaticProps function
    useSuspense: true,
  },
};
