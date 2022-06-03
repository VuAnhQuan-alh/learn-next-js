import { Empty } from '@components/layouts'
import { AppPropsWithLayout } from '@models'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // console.log("app re-render")
  const Layout = Component.Layout ?? Component ?? Empty
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
