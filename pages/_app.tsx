import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default wrapper.withRedux(MyApp)
