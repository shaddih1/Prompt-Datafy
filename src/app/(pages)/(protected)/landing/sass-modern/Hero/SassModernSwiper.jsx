'use client'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

//style
import 'swiper/css'

//images
import sass1 from '@/assets/images/hero/saas1.jpg'
import sass2 from '@/assets/images/hero/saas2.jpg'
import sass3 from '@/assets/images/hero/saas3.jpg'
import Image from 'next/image'

const SassModernSwiper = () => {
  return (
    <div
      id="swiper_one"
      className="swiper border-[6px] border-white bg-white 2xl:w-[140%]"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href=""
              className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
            >
              <svg
                className="h-5 w-5 fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
              </svg>
            </Link>
          </div>
          <Image
            width={705}
            height={467}
            src={sass1}
            alt="saas1"
            className="w-full h-full rounded-md"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href=""
              className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
            >
              <svg
                className="h-5 w-5 fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
              </svg>
            </Link>
          </div>
          <Image
            width={705}
            height={467}
            src={sass2}
            alt="saas2"
            className="w-full h-full rounded-md"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href=""
              className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
            >
              <svg
                className="h-5 w-5 fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
              </svg>
            </Link>
          </div>
          <Image
            width={705}
            height={467}
            src={sass3}
            alt="saas3"
            className="w-full h-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SassModernSwiper
