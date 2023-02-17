import "@/styles/main.scss";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Component {...pageProps} />
      <Script defer src="https://kit.fontawesome.com/d1bbe2042f.js" />
    </>
  );
}
