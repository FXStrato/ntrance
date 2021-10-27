// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/logo-180x180.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/logo-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/logo-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
