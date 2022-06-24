import { ThemeProvider } from "styled-components";
import theme from "../styles/themes/default";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
