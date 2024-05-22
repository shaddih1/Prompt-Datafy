import dynamic from 'next/dynamic'

const FAQs = dynamic(() => import('./FAQs'))
import Benefits from './Benefits'
import Hero from './Hero'
import PricingPlans from './PricingPlans'
import CTA from './CTA'
import Footer from '@/components/common/Footer'

//data
import { benefits } from './data'

export const metadata = {
  title: 'Pricing',
}

const Pricing = () => {
  return (
    <>
      <div>
        <Hero />

        <PricingPlans />

        <Benefits benefits={benefits} />

        <FAQs />

        <CTA />

        <Footer />
      </div>
    </>
  )
}

export default Pricing
