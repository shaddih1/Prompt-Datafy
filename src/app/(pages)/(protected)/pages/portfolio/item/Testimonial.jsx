'use client'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaQuoteLeft } from 'react-icons/fa6'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import 'swiper/css'

const slidImages = [avatar1, avatar2, avatar3]
const Testimonial = () => {
  return (
    <section className="py-8 overflow-x-hidden">
      <div className="container">
        <h3 className="text-2xl mb-12">Feedback From Client</h3>
        <div>
          <div className="relative">
            <div className="hidden sm:block">
              <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../assets/images/pattern/dot5.svg')]" />
              <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../assets/images/pattern/dot2.svg')]" />
            </div>
            <div id="swiper_one" className="swiper relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop
                spaceBetween={30}
              >
                {(slidImages ?? []).map((image, idx) => {
                  return (
                    <SwiperSlide
                      key={idx}
                      className="p-10 border rounded-xl bg-white shadow"
                    >
                      <FaQuoteLeft className="text-gray-500 text-5xl" />
                      <p className="my-4">
                        It is one of the very convenient to use project manager
                        ever! I have tried many project management apps for my
                        daily tasks, but this one is far better than others.
                        Simply loved it!
                      </p>
                      <div className="border-b border-gray-200 w-full my-7" />
                      <div className="flex items-center gap-2">
                        <Image
                          height={40}
                          width={40}
                          alt="swiperImg"
                          src={image}
                          className="h-10 w-10 rounded-full"
                        />
                        <div>
                          <h1 className="text-sm mb-1">Cersei Lannister</h1>
                          <p className="text-gray-500 text-xs">
                            Senior Project Manager
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
