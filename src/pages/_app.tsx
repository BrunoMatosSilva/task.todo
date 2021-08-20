import { AuthContextProvider } from '../contexts/AuthContext';
import { GlobalStyle } from '../styles/globals'

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
