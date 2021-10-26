import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from '../context/AppContext';
import theme from '../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
