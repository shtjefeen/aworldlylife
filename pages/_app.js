import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledTheme } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme/light";
import LayoutDefault from "@layouts/Default";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

class WrappedApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const Layout = Component.Layout || LayoutDefault;
    return (
      <React.Fragment>
        <DefaultSeo {...SEO} />
        <ThemeProvider theme={theme}>
          <StyledTheme theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} key={router.route} />
            </Layout>
          </StyledTheme>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default WrappedApp;
