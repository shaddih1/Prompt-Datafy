
import Hero from './Hero'
import Blog from './Blog'
import Stats from './Stats'
import Coins from './Coins'
import Features from './Features'
import Integration from './Integration'
import Footer from '@/components/common/Footer'

//data
import { coins, features } from './data'

export const metadata = {
  title: 'Crypto Landing',
}

const Crypto = () => {
  return (
    <>
      <Hero />

      <Coins coins={coins} />

      <Features features={features} />

      <Integration />

      <Stats />

      <Blog />

      <Footer />
    </>
  )
}

export default Crypto
