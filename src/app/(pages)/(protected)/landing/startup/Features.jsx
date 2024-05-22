import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//image
import desktop1 from '@/assets/images/features/desktop1.gif'
import desktop from '@/assets/images/hero/desktop.png'

const Features = () => {
  return (
    <section className="xl:py-24 py-16 overflow-x-hidden">
      <div className="container">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
                Feature
              </span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                Automate everything
              </h1>
              <p className="text-gray-500">
                You don&apos;t need to manully follow up with your visitors. The
                Prompt takes care of it and follow up automatically with them to
                understand their needs
              </p>
              <button className="mt-12 flex items-center">
                <Link
                  href=""
                  className="inline-flex gap-2 items-center border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
                >
                  Learn more <FaArrowRight />
                </Link>
              </button>
            </div>
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <Image width={496} height={372} src={desktop1} alt="desktop1" />
            </div>
          </div>
        </div>
        <div className="xl:py-24 py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div>
              <Image
                width={496}
                height={335}
                alt="desktop"
                src={desktop}
                data-aos="fade-right"
                data-aos-duration={1500}
              />
            </div>
            <div>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                Auto-tune your marketing campaigns
              </h1>
              <p className="text-gray-500">
                The Prompts keeps an eye on your all marketting effort and auto
                tune the marketing campaigns settings to make them perform
                better
              </p>
              <button className="mt-12 flex items-center">
                <Link
                  href=""
                  className="inline-flex gap-2 items-center border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
                >
                  Learn more <FaArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
