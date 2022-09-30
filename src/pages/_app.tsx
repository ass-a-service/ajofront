import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6B6PTGR2SL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6B6PTGR2SL');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
);

export default MyApp;
