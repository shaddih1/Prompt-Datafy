
import Content from './Content'
import Hero from './Hero'
import Testimonial from './Testimonial'
import Navigation from './Navigation'
import Footer from '@/components/common/Footer'

//data
import { workImages } from './data'

export const metadata = {
  title: 'Portfolio Items',
}

const PortfolioItems = () => {
  return (
    <>
      <Hero />

      <Content workImages={workImages} />

      <Testimonial />

      <Navigation />

      <Footer />
    </>
  )
}

export default PortfolioItems
