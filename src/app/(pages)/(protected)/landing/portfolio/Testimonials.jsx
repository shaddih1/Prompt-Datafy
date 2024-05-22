import Image from 'next/image'
import PortfolioSwiper from './PortfolioSwiper'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { testimonials } from './data'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Testimonials = () => {
  return (
    <section
      className="py-20 relative overflow-x-hidden bg-gradient-to-b from-red-500/5 to-amber-500/5"
      data-aos="fade-up"
      data-aos-duration={600}
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image
          width={1905}
          height={150}
          src={whiteWave}
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <div className="relative z-20">
          <div className="flex items-center justify-between pb-14">
            <div>
              <h2 className="md:text-3xl text-xl font-semibold my-5">
                Kind words from excellent clients
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="button-prev swiper-custom-prev cursor-pointer">
                <FaArrowLeft />
              </div>
              <div className="button-next swiper-custom-next cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hidden sm:block">
              <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('../assets/images/pattern/dot3.svg')]" />
              <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('../assets/images/pattern/dot3.svg')]" />
            </div>
            <PortfolioSwiper testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
