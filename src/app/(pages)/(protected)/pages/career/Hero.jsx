import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
import img1 from '@/assets/images/photos/16.jpg'
import img2 from '@/assets/images/photos/14.jpg'
import img3 from '@/assets/images/photos/15.jpg'

const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-gray-200/70 relative">
      <section className="relative py-16 sm:py-20 md:py-40">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-start">
                <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                  Let&apos;s work&nbsp;
                  <span className="relative z-0 after:bg-yellow-100 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                    together
                  </span>
                  . Join Prompt!
                </h1>
                <p className="text-gray-500 leading-relaxed lg:w-3/4">
                  We&apos;re always open for new creative, analytical and
                  technical minds to join our team. Search for the suitable job.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start">
                  <button className="flex items-center gap-3 bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-8 py-3">
                    View All Openings
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2" data-aos="zoom-in">
              <div className="grid grid-cols-2 items-center gap-6">
                <div>
                  <Image
                    width={250}
                    height={170}
                    src={img1}
                    alt="photo-12"
                    className="border-[6px] border-white bg-white shadow-md"
                  />
                </div>
                <div>
                  <div className="grid grid-rows-2 items-center gap-6">
                    <div>
                      <Image
                        width={250}
                        height={250}
                        src={img2}
                        alt="photo-14"
                        className="border-[6px] border-white bg-white shadow-md"
                      />
                    </div>
                    <div>
                      <Image
                        width={250}
                        height={250}
                        src={img3}
                        alt="photo-15"
                        className="border-[6px] border-white bg-white shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute -bottom-1 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="shape-b"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g id="curve" fill="#fff">
              <path
                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                id="Path"
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Hero
