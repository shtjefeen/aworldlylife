import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledTheme } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme/light";
import LayoutDefault from "@layouts/Default";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import Script from 'next/script'
import { useRouter } from 'next/router'
import * as fbq from '../lib/fbq'


import PropTypes from "prop-types";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />


      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      <style global jsx>{`
        .MuiContainer-root {
          max-width: 1107px;
        }
      `}</style>

      <ThemeProvider theme={theme}>
        <StyledTheme theme={theme}>
          <CssBaseline />
          <LayoutDefault>
            <Component {...pageProps} />
          </LayoutDefault>
        </StyledTheme>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
