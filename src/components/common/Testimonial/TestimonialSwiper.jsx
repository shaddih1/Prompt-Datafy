'use client'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar } from 'react-icons/fa6'

// static data
import { testimonials } from '../data'

import 'swiper/css'
import 'swiper/css/navigation'

const CommonSlide = ({
  name,
  position,
  description,
  image,
}) => {
  return (
    <div className="p-10 bg-white">
      <p className="text-slate-800">{description}</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src={image}
              width={40}
              height={40}
              alt="testimonialImage"
              className="w-10 rounded-full"
            />
          </div>
          <div>
            <h6>{name}</h6>
            <p className="text-sm text-slate-500">{position}</p>
          </div>
        </div>
        <div>
          <span className="flex gap-1 items-center text-yellow-500 text-base">
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
          </span>
        </div>
      </div>
    </div>
  )
}

const TestimonialSwiper = () => {
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
        {(testimonials ?? []).map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <CommonSlide
                name={item.name}
                description={item.description}
                image={item.image}
                position={item.position}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default TestimonialSwiper
