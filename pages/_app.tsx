import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from "../redux/store";
import {UserProvider} from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
  )
}
export default wrapper.withRedux(MyApp)
