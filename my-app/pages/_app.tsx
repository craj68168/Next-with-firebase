import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import Navbar from '../components/molecules/navbar';
import { AuthContextProvider } from '../context/AuthContext';
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }, // for not fetching data while window change
});
function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
    <Navbar />
    <Component {...pageProps} />
    </QueryClientProvider>
  </AuthContextProvider>
}

export default MyApp
