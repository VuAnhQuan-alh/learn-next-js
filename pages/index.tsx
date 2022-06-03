import { MainLayout } from '@components/layouts'
import { NextPageWithLayout } from '@models'
import Link from 'next/link'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Link href="/about">
        <a>Go to about</a>
      </Link>
    </div>
  )
}
Home.Layout = MainLayout

export default Home
