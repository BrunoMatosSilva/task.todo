import Modal from 'react-modal';
import { AuthContextProvider } from '../contexts/AuthContext';
import { GlobalStyle } from '../styles/globals'


Modal.setAppElement('body');

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp
