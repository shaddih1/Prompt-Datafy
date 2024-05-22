import Image from 'next/image'
import dynamic from 'next/dynamic'
const EmailInput = dynamic(() => import('./EmailInput'))
const SassModernSwiper = dynamic(() => import('./SassModernSwiper'))

import whiteWave from '@/assets/images/shapes/white-wave.svg'

const checkSvg = (
  <svg
    className="stroke-green-500 stroke-2 w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-t from-slate-500/10 relative">
        <section className="relative pt-44 pb-36">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-center sm:text-start">
                  <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                    The best way to&nbsp;
                    <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                      showcase
                    </span>
                    &nbsp;your saas
                  </h1>
                  <p className="sm:text-lg text-gray-500">
                    Make your saas application stand out with high-quality
                    landing page designed and developed by professional
                  </p>
                  <div className="flex gap-3  mt-16">
                    <EmailInput />
                    <button className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3">
                      Sign Up
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-5 mt-5">
                    <div className="flex items-center gap-2">
                      {checkSvg}
                      <p className="text-sm text-gray-700">Free 14-day Demo</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {checkSvg}
                      <p className="text-sm text-gray-700">
                        No credit card needed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="hidden sm:block">
                    <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
                    <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
                  </div>

                  <SassModernSwiper />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <Image
            width={1905}
            height={150}
            src={whiteWave}
            alt="white-wave-svg"
            className="w-full -scale-x-100 -scale-y-100"
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
