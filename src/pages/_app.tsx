import "../styles/globalReset.sass";
import "../styles/globalModalWindowStyles.sass";
import "../styles/variables.sass";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
