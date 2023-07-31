import '@/styles/globals.css'
import '@/styles/ProjectView.css'
import '@/styles/login.css'
import '@/styles/adminStyle.css'
import '@/styles/adminProfile.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from "next/head";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
