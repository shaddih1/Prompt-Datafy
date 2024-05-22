import Link from 'next/link'
import { FaCheck } from 'react-icons/fa6'
import { pricingCards } from './data'

const PricingCards = () => {
  return (
    <div className="container relative">
      <div className="text-center">
        <span className="text-xs bg-primary/10 text-primary/90 rounded-full px-2 py-1">
          Plans
        </span>
        <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
        <p className="text-gray-500">
          Pricing that <span className="text-primary">works </span> for
          everyone
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
        {Object.keys(pricingCards).map((title, idx) => {
          return (
            <div
              className="h-full"
              data-aos="fade-up"
              data-aos-duration={pricingCards[title].duration}
              key={idx}
            >
              <div className="h-full transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                  <div className="flex flex-col h-full">
                    <div className="shrink">
                      <span className="text-lg text-primary">{title}</span>
                      <h1 className="text-3xl/tight font-semibold mt-3">
                        <sup className="text-gray-500 text-sm font-normal">
                          $
                        </sup>
                        {pricingCards[title].price}
                        <sub className="text-gray-500 text-sm font-normal">
                          /month
                        </sub>
                      </h1>
                    </div>
                    <hr className="border-b border-gray-200 w-full my-7" />
                    <div className="grow flex flex-col h-full">
                      <div className="grow flex flex-col gap-4">
                        {pricingCards[title].features.map((feature, idx) => {
                          return (
                            <p
                              className="flex items-center text-gray-600 gap-4"
                              key={idx}
                            >
                              <FaCheck size={18} className="text-green-500" />
                              {feature}
                            </p>
                          )
                        })}
                      </div>

                      <div className="shrink block mt-20">
                        <Link
                          href=""
                          className="inline-flex items-center justify-center bg-primary text-white w-full py-3 rounded-lg border border-transparent hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 hover:border hover:border-primary transition-all duration-300"
                        >
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PricingCards
