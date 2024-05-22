import Features1 from './Features1'
import Features2 from './Features2'
import Features3 from './Features3'
import Features4 from './Features4'
import Hero from './Hero'
import Footer2 from '@/components/common/Footer2'
import FeedBack from '@/components/common/FeedbackTestimonial'

// data
import { features } from './data'


export const metadata = {
  title: 'Marketing Landing',
}

const Marketing = () => {
  return (
    <div className="text-gray-700">
      <Hero />

      <section className="py-16 lg:py-32">
        <Features1 features={features} />
        <Features2 />
        <Features3 />
      </section>

      <Features4 />

      <FeedBack />

      <Footer2 />
    </div>
  )
}

export default Marketing
