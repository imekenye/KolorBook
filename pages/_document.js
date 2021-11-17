import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Voyage-Bold.otf"
            as="font"
            crossOrigin=""
          ></link>
          <link
            rel="preload"
            href="/fonts/Voyage-Regular.otf"
            as="font"
            crossOrigin=""
          ></link>
          <link
            rel="preload"
            href="/fonts/Klarheit Grotesk Regular.ttf"
            as="font"
            crossOrigin=""
          ></link>
          <link
            rel="preload"
            href="/fonts/Klarheit Grotesk Bold.ttf"
            as="font"
            crossOrigin=""
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
