
import Benefits from './Benefits'
import CTA from './CTA'
import Culture from './Culture'
import Hero from './Hero'
import Vacancies from './Vacancies'
import Footer from '@/components/common/Footer'

//data
import { benefits, vacancies } from './data'

export const metadata = {
  title: 'Career Landing',
}

const career = () => {
  return (
    <>
      <div className="text-gray-800">
        <Hero />

        <Benefits benefits={benefits} />

        <Culture />

        <Vacancies vacancies={vacancies} />

        <CTA />

        <Footer />
      </div>
    </>
  )
}

export default career
