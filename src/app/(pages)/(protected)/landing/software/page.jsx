
import ClientsReview from './ClientsReview'
import Features from './Features'
import Hero from './Hero'
import Footer from './Footer'
import PricingCards from '@/components/common/PricingCards'
import Testimonial from '@/components/common/Testimonial'

//data
import { features } from './data'

export const metadata = {
  title: 'Software Landing',
}

const Software = () => {
  return (
    <div className="text-gray-700">
      <Hero />

      <ClientsReview />

      <Features features={features} />

      <section className="py-16 sm:py-24">
        <PricingCards />
      </section>

      <Testimonial />

      <Footer />
    </div>
  )
}

export default Software
