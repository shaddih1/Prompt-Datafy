import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
const FeaturesAccordions = dynamic(() => import('./FeaturesAccordions'))

//images
import sass1 from '@/assets/images/hero/saas1.jpg'
import sass2 from '@/assets/images/hero/saas2.jpg'

const Features = () => {
  const checkIcon = <FaCheck color="#22C55E" size={20} />

  return (
    <section className="overflow-hidden">
      <div className="xl:py-24 py-16">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Features
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Better Management. Better Performance
            </h1>
            <p className="text-gray-500">
              Start working with <span className="text-primary"> Prompt </span>
              to manage your workforce better
            </p>
          </div>

          <div className="xl:pt-16 xl:pb-28 py-16">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
              <div className="relative">
                <div className="hidden sm:block">
                  <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
                  <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
                </div>
                <Image
                  src={sass1}
                  alt="saas1"
                  data-aos="fade-right"
                  data-aos-duration="400"
                />
              </div>

              <FeaturesAccordions />
            </div>
          </div>

          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1n gap-6 items-center">
              <div
                className="order-2 lg:order-1 2xl:w-9/12"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
                  <svg
                    className="h-7 w-7 text-primary"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        id="bound"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <path
                        d="M10.8226874,8.36941377 L12.7324324,9.82298668 C13.4112512,8.93113547 14.4592942,8.4 15.6,8.4 C17.5882251,8.4 19.2,10.0117749 19.2,12 C19.2,13.9882251 17.5882251,15.6 15.6,15.6 C14.5814697,15.6 13.6363389,15.1780547 12.9574041,14.4447676 L11.1963369,16.075302 C12.2923051,17.2590082 13.8596186,18 15.6,18 C18.9137085,18 21.6,15.3137085 21.6,12 C21.6,8.6862915 18.9137085,6 15.6,6 C13.6507856,6 11.9186648,6.9294879 10.8226874,8.36941377 Z"
                        id="Combined-Shape"
                        fill="currentColor"
                        opacity="0.3"
                      ></path>
                      <path
                        d="M8.4,18 C5.0862915,18 2.4,15.3137085 2.4,12 C2.4,8.6862915 5.0862915,6 8.4,6 C11.7137085,6 14.4,8.6862915 14.4,12 C14.4,15.3137085 11.7137085,18 8.4,18 Z"
                        id="Oval-14-Copy"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>

                <h1 className="text-3xl/tight font-medium mt-6 mb-4">
                  Smart Payroll. Paying your people couldn&apos;t be easier
                </h1>
                <p className="text-gray-500">
                  You can modify your pages with drag-dropping , can import
                  demos with just ” One Click” and can modify theme setting
                  easy-to-use options panel.
                </p>
                <div className="flex items-center mt-12">
                  <Link
                    href=""
                    className="text-primary inline-flex gap-2 items-center"
                  >
                    Learn more
                    <FaArrowRight />
                  </Link>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="hidden sm:block">
                  <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
                  <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
                </div>

                <Image
                  src={sass2}
                  alt="saas2"
                  data-aos="fade-left"
                  data-aos-duration="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:py-24 py-16">
        <div className="container" data-aos="fade-up" data-aos-duration="600">
          <div className="text-center">
            <h1 className="text-2xl font-medium">
              Any many more powerful features
            </h1>
          </div>

          <div className="py-16">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="order-1">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Hire and Retain Top Talent
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Team Management
                  </p>
                </div>
              </div>

              <div className="order-3 xl:order-2">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Stay Compliant
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Improve Productivity
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Improve Experience
                  </p>
                </div>
              </div>

              <div className="order-4 xl:order-3">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Self-service Time Tracking
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Performance Management
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Expert HR
                  </p>
                </div>
              </div>

              <div className="order-2 xl:order-4">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    New Hire Checklist
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Tax Calculator
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center mx-auto">
            <Link
              href=""
              className="inline-flex gap-2 items-center bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
            >
              Sign Up Now <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
