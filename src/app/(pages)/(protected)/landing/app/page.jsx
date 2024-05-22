
import Features1 from './Features1'
import Features2 from './Features2'
import Footer from './Footer'
import Hero from './Hero'
import Testimonial from '@/components/common/Testimonial'

export const metadata = {
  title: 'App Landing',
}

const App = () => {
  return (
    <>
      <Hero />

      <Features1 />

      <Features2 />

      <Testimonial />

      <Footer />
    </>
  )
}

export default App
