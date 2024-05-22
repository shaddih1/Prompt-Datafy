'use client'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css'

const PortfolioSwiper = ({ testimonials }) => {
  return (
    <div id="swiper_two" className="swiper">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={30}
        loop
        navigation={{
          nextEl: '.swiper-custom-next',
          prevEl: '.swiper-custom-prev',
        }}
      >
        {(testimonials ?? []).map((testimonial, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="p-12 bg-white border">
                <p className="text-slate-800">{testimonial.description}</p>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        width={40}
                        height={40}
                        alt="userImg"
                        src={testimonial.image}
                        className="w-10 rounded-full"
                      />
                    </div>
                    <div>
                      <h6>{testimonial.name}</h6>
                      <p className="text-sm text-slate-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={96}
                      height={32}
                      alt="brandlogo"
                      src={testimonial.brand}
                      className="w-24"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default PortfolioSwiper
