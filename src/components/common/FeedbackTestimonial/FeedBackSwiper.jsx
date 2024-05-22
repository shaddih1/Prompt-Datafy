'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa6'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import google from '@/assets/images/brands/google.svg'
import amazon from '@/assets/images/brands/amazon.svg'
import lenovo from '@/assets/images/brands/lenovo.svg'

import 'swiper/css'
import 'swiper/css/navigation'

const CommonSlide1 = ({ image, logo, }) => {
  return (
    <>
      <FaQuoteLeft className="text-gray-500 text-5xl" />
      <p className="my-4">
        It is one of the very convenient to use project manager ever! I have
        tried many project management apps for my daily tasks, but this one is
        far better than others. Simply loved it!
      </p>
      <div className="border-b border-gray-200 w-full my-7"></div>

      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <Image
            alt="userImg"
            height={40}
            width={40}
            src={image}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h1 className="text-sm mb-1">Cersei Lannister</h1>
            <p className="text-gray-500 text-xs">Senior Project Manager</p>
          </div>
        </div>
        <div>
          <Image
            alt="companyLogo"
            height={32}
            width={96}
            src={logo}
            className="w-24"
          />
        </div>
      </div>
    </>
  )
}
const FeedBackSwiper = () => {
  return (
    <div className="col-span-3 lg:col-span-2 xl:col-span-3">
      <div className="relative">
        <div className="hidden sm:block">
          <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
          <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
        </div>
        <div id="swiper_one" className="swiper relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-custom-next',
              prevEl: '.swiper-custom-prev',
            }}
            loop
            spaceBetween={30}
          >
            <SwiperSlide className="p-10 border rounded-xl bg-white shadow">
              <CommonSlide1 image={avatar1} logo={google}></CommonSlide1>
            </SwiperSlide>
            <SwiperSlide className="p-10 border rounded-xl bg-white shadow">
              <CommonSlide1 image={avatar2} logo={amazon}></CommonSlide1>
            </SwiperSlide>
            <SwiperSlide className="p-10 border rounded-xl bg-white shadow">
              <CommonSlide1 image={avatar3} logo={lenovo}></CommonSlide1>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeedBackSwiper
