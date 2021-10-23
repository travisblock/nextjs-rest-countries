import 'styles/globals.css'
import nProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css';
import { AppWrapper } from 'contexts/filter.context';

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeComplete', nProgress.done)
Router.events.on('routeChangeError', nProgress.done)

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

