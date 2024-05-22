import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
const TestimonialSwiper = dynamic(() => import('./TestimonialSwiper'))

// images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Testimonial = () => {
  return (
    <>
      <section
        className="bg-gray-100 relative py-20 overflow-x-hidden"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <Image src={whiteWave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="container relative">
          <div className="relative z-20">
            <div className="flex items-center justify-between pb-14">
              <div>
                <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                  Testimonials
                </span>
                <h2 className="md:text-3xl text-xl font-semibold my-5">
                  What people say
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
                <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('../assets/images/pattern/dot3.svg')]"></div>
                <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('../assets/images/pattern/dot3.svg')]"></div>
              </div>

              <TestimonialSwiper />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
