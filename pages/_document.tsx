import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // @ts-ignore
    <Html xmlns="http://www.w3.org/1999/xhtml">
      <Head />
      <body
        style={{ display: "block", margin: "0px", padding: "0px" }}
        // @ts-ignore
        bgcolor="#ffffff"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
