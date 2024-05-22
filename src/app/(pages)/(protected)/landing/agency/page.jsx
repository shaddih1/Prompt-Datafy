
import Blog from './Blog'
import Clients from './Clients'
import Footer from './Footer'
import Hero from './Hero'
import Portfolios from './Portfolios'
import Services from './Services'
import Vacancies from './Vacancies'

// data
import { blogPosts, jobDetails, services } from './data'
import { projects } from '@/app/(pages)/(protected)/landing/portfolio/data'

export const metadata = {
  title: 'Agency Landing',
}

const Agency = () => {
  return (
    <>
      <Hero />

      <Services services={services} />

      <Portfolios portfolios={projects} />

      <Clients />

      <Blog blogs={blogPosts} />

      <Vacancies jobDetails={jobDetails} />

      <Footer />
    </>
  )
}

export default Agency
