import { Chakra } from '../src/server/utilities';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <div style={{ flex: 1 }}>
        <Nav />
        <Component {...pageProps} />
      </div>
      <Footer />
    </Chakra>
  );
}

export default MyApp;
