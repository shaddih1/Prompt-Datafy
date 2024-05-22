
import CTA from './CTA'
import Footer from './Footer'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'

//data
import { projects, services } from './data'

export const metadata = {
  title: 'PortFolio Landing',
}

const PortFolio = () => {
  return (
    <>
      <Hero />
      <Services services={services} />
      <Projects projects={projects} />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default PortFolio
