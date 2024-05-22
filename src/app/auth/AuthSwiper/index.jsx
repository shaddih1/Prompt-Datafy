'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import sass1 from '@/assets/images/hero/saas1.jpg'
import sass2 from '@/assets/images/hero/saas2.jpg'
import sass3 from '@/assets/images/hero/saas3.jpg'

// styles
import 'swiper/css'
import 'swiper/css/pagination'

const AuthSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
    >
      <SwiperSlide>
        <div className="swiper-slide-content">
          <div className="text-center w-3/5 mx-auto">
            <Image
              src={sass1}
              width={305}
              height={202}
              alt="saas alt"
              className="w-full"
            />
          </div>
          <div className="text-center my-6 pb-12">
            <h5 className="font-medium text-base/[1.6] text-gray-600 my-2.5">
              Manage your saas business with ease
            </h5>
            <p className="text-sm/[1.6] text-gray-500 mb-4">
              Make your saas application stand out with high-quality landing
              page designed and developed by professional.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <div className="text-center w-3/5 mx-auto">
            <Image
              src={sass2}
              width={305}
              height={202}
              alt="saas alt2"
              className="w-full"
            />
          </div>
          <div className="text-center my-6 pb-12">
            <h5 className="font-medium text-base/[1.6] text-gray-600 my-2.5">
              The best way to showcase your mobile app
            </h5>
            <p className="text-sm/[1.6] text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <div className="text-center w-3/5 mx-auto">
            <Image
              src={sass3}
              width={305}
              height={202}
              alt="saas alt3"
              className="w-full"
            />
          </div>
          <div className="text-center my-6 pb-12">
            <h5 className="font-medium text-base/[1.6] text-gray-600 my-2.5">
              Smart Solution that convert Lead to Customer
            </h5>
            <p className="text-sm/[1.6] text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-pagination !bottom-0" />
    </Swiper>
  )
}

export default AuthSwiper
