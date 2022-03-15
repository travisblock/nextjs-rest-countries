import 'styles/globals.css'
import nProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css';
import { AppWrapper } from 'contexts/filter.context';
import { ThemeProvider } from 'next-themes';

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeComplete', nProgress.done)
Router.events.on('routeChangeError', nProgress.done)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default MyApp

