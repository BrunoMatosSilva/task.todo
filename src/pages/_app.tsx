import { AuthProvider } from '../contexts/AuthContext';
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp
