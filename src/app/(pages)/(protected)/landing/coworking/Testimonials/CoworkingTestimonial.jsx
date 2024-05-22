'use client'
// swiper
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

//images
import Image from 'next/image'

import 'swiper/css'

const CoworkingTestimonial = ({
  testimonials,
}) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      loop
      spaceBetween={30}
      autoplay={{ delay: 2500 }}
      breakpoints={{
        '576': { slidesPerView: 1 },
        '768': { slidesPerView: 2 },
      }}
      roundLengths
      navigation={{
        nextEl: '.swiper-custom-next',
        prevEl: '.swiper-custom-prev',
      }}
    >
      {(testimonials ?? []).map((testimonial, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="md:p-12 p-6 border rounded">
              <h5 className="font-light">{testimonial.statement}</h5>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      width={529}
                      height={203}
                      alt={`slide-${idx}`}
                      src={testimonial.customer.avatar}
                      className="w-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm">{testimonial.customer.name}</h6>
                    <p className="text-sm text-slate-500">
                      {testimonial.customer.designation}
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    alt="company-logo"
                    width={96}
                    height={32}
                    src={testimonial.logo}
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CoworkingTestimonial
