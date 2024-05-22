'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Typist from 'react-text-typist'
import { FaArrowDown } from 'react-icons/fa6'

//images
import app from '@/assets/images/demo/home-app.jpg'
import portfolio from '@/assets/images/demo/home-portfolio.jpg'
import sass from '@/assets/images/demo/home-saas.jpg'
import sass2 from '@/assets/images/demo/home-saas2.jpg'
import marketing from '@/assets/images/demo/home-marketing.jpg'

// styles
import 'swiper/css'

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      loop
    >
      {([app, portfolio, sass, marketing, sass2] ?? []).map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Image
              width={705}
              height={440}
              src={img.src}
              alt="saas1"
              className="w-full h-full rounded-md"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
const Hero = () => {
  return (
    <section className="relative pt-44 pb-36 bg-gradient-to-t from-slate-500/10 overflow-x-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div>
            <h1 className="md:text-5xl/tight text-3xl font-semibold text-gray-700 mb-7">
              Modern website templates, crafted with Tailwind CSS for
              <br /> your&nbsp;
              <Typist
                className="typewrite capitalize relative after:absolute after:inset-x-0 after:bottom-2 after:bg-green-400/40 after:h-5 after:w-full after:-z-10"
                sentences={[
                  'saas',
                  'mobile app',
                  'software',
                  'startup',
                  'agency',
                  'portfolio',
                  'coworking',
                  'crypto',
                  'marketing',
                ]}
                typingSpeed={1500}
                deletingSpeed={700}
                showCursor={false}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </h1>

            <p className="text-slate-500 leading-7">
              The Make your website or web application perfect starting point
              for your next project and the ultimate resource for learning how
              experts build real websites with Tailwind CSS.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-16">
              <Link
                href="#demo"
                className="flex gap-3 items-center py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                View Demos <FaArrowDown />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="hidden sm:block">
                <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
                <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
              </div>

              <div
                className="swiper border-[6px] border-white bg-white 2xl:w-[140%] shadow"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <SwiperSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
