'use client'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaQuoteRight, FaStar } from 'react-icons/fa6'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

// styles
import 'swiper/css'

const HeroSwiper = () => {
  return (
    <>
      <div className="absolute max-w-xs bottom-28 -start-72">
        <div id="swiper_one" className="swiper">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop
          >
            {([avatar1, avatar2] ?? []).map((image, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="relative">
                    <div className="p-4 rounded-md bg-white relative">
                      <div className="flex items-center gap-5">
                        <Image
                          alt="user"
                          src={image}
                          width={48}
                          className="w-12 rounded-full"
                        />
                        <div>
                          <h2 className="text-sm text-slate-400">
                            Very convenient to use project manager!
                          </h2>
                          <p className="mt-2">
                            <span className="flex gap-1 items-center text-yellow-500 text-base">
                              <FaStar size={18} />
                              <FaStar size={18} />
                              <FaStar size={18} />
                              <FaStar size={18} />
                            </span>
                          </p>
                        </div>
                      </div>
                      {idx % 2 === 0 && (
                        <div className="absolute end-1 bottom-0">
                          <FaQuoteRight size={24} color="#FEE3D0" />
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HeroSwiper
