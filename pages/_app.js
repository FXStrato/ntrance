import { Chakra } from '../src/server/utilities';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Nav/>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
