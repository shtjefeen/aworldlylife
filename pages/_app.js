import React from "react";
import Script from "next/script";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledTheme } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme/light";
import LayoutDefault from "@layouts/Default";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import PropTypes from "prop-types";


export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BNNMVL90RY`}
      />
      <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BNNMVL90RY', {
            page_path: window.location.pathname,
          });
      `}
    </Script>
      <DefaultSeo {...SEO} />

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
