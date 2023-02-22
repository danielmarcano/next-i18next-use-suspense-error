import { Suspense } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation, UserConfig } from "next-i18next";

import i18nConfig from "$/../next-i18next.config";

function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="Loading...">{<Component {...pageProps} />}</Suspense>
  );
}

export default appWithTranslation(App, i18nConfig as UserConfig);
