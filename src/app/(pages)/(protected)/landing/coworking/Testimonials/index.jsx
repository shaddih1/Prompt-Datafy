import dynamic from 'next/dynamic'
const CoworkingTestimonial = dynamic(() => import('./CoworkingTestimonial'))
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'




const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container">
        <div className="relative z-20">
          <div className="flex items-center justify-between pb-14">
            <div>
              <h2 className="md:text-3xl text-xl my-5">
                See what our members are saying
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="button-prev swiper-custom-prev cursor-pointer">
                <FaArrowLeft color="#2563EB" />
              </div>
              <div className="button-next swiper-custom-next cursor-pointer">
                <FaArrowRight color="#2563EB" />
              </div>
            </div>
          </div>
          <div>
            <div id="swiper_two" className="swiper">
              <CoworkingTestimonial testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
