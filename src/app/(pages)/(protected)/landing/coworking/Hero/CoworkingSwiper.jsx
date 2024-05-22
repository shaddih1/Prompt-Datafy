'use client'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

//images
import coWorking1 from '@/assets/images/hero/coworking1.jpg'
import coWorking2 from '@/assets/images/hero/coworking2.jpg'
import coWorking3 from '@/assets/images/hero/coworking3.jpg'

import 'swiper/css'

const CoworkingSwiper = () => {
  return (
    <div id="swiper_one" className="swiper rounded-xl" data-aos="fade-up">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: '.swiper-custom-next',
          prevEl: '.swiper-custom-prev',
        }}
      >
        <SwiperSlide>
          <Image
            alt="slideImg1"
            height={520}
            width={1088}
            src={coWorking2}
            className="w-full h-[520px] rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="slideImg2"
            height={520}
            width={1088}
            src={coWorking3}
            className="w-full h-[520px] rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="slideImg3"
            height={520}
            width={1088}
            src={coWorking1}
            className="w-full h-[520px] rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CoworkingSwiper
