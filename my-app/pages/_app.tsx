import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import Navbar from './navbar';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
    <Navbar />
    <Component {...pageProps} />
  </AuthContextProvider>
}

export default MyApp
