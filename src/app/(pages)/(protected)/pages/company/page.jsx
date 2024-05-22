
import About from './About'
import Client from './Client'
import Feature from './Feature'
import Team from './Team'
import Hero from './Hero'
import Counter from './Counter'
import Footer from '@/components/common/Footer'

//data
import { teamMembers } from './data'

export const metadata = {
  title: 'Company',
}

const Company = () => {
  return (
    <div className="text-gray-700">
      <Hero />

      <About />

      <Feature />

      <Counter />

      <Team teamMembers={teamMembers} />

      <Client />

      <Footer />
    </div>
  )
}

export default Company
