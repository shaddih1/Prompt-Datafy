import HelpLinks from './HelpLinks'
import Hero from './Hero'
import SupportCenter from './SupportCenter'
import Footer from '@/components/common/Footer'

//data
import { helpLinks } from './data'

import FAQs from './FAQs'

export const metadata = {
  title: 'Help',
}

const Help = () => {
  return (
    <>
      <div>
        <Hero />
        <section className="py-20 relative">
          <div className="container">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              <div className="lg:col-span-2 cols-span-1">
                <HelpLinks helpLinks={helpLinks} />

                <FAQs />
              </div>

              <SupportCenter />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Help
