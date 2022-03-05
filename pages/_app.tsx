import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <NextNProgress 
  color="#000000"
  options={{ showSpinner: false }}
  />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
