import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledTheme } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme/light";
import LayoutDefault from "@layouts/Default";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Router from 'next/router'
import PropTypes from "prop-types";

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1577678739252182');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <style global jsx>{`
        .MuiContainer-root {
          max-width: 1107px;
        }
      `}</style>
      <FacebookPixel />
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
