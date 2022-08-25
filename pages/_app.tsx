import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Meta from "components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
