'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FormInput } from '@/components'

//images
import sass1 from '@/assets/images/hero/saas1.jpg'
import sass2 from '@/assets/images/hero/saas2.jpg'
import sass3 from '@/assets/images/hero/saas3.jpg'
import Image from 'next/image'

const checkSvg = (
  <svg
    className="w-5 h-5 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)
const Hero = () => {
  const { control, handleSubmit } = useForm()
  return (
    <>
      <div className="pt-36 sm:pb-96 pb-80 relative bg-gradient-to-t from-slate-500/10">
        <div className="container">
          <div className="text-center lg:w-11/12 mx-auto">
            <div>
              <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5">
                The best way to&nbsp;
                <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                  showcase
                </span>
                &nbsp;your saas
              </h1>
              <p className="sm:text-lg text-gray-500">
                Make your saas application stand out with high-quality landing
                page designed and developed by professional
              </p>
              <form
                onSubmit={handleSubmit(() => {})}
                className="flex flex-wrap items-center justify-center gap-2 mt-12"
                noValidate
              >
                <FormInput
                  control={control}
                  formNoValidate
                  noValidate
                  name="name"
                  className="w-full rounded border-gray-300 focus:border-gray-400 focus:ring-0 bg-white py-2 px-4"
                  containerClassName="flex items-center"
                  placeholder="Your Name"
                />
                <FormInput
                  control={control}
                  noValidate
                  name="email"
                  className="w-full rounded border-gray-300 focus:border-gray-400 focus:ring-0 bg-white py-2 px-4"
                  containerClassName="flex items-center"
                  placeholder="Your Email"
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50"
                >
                  Sign Up
                </button>
              </form>

              <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
                <div className="flex items-center gap-2">
                  {checkSvg}
                  <p className="text-sm text-gray-700">Free 14-day Demo</p>
                </div>
                <div className="flex items-center gap-2">
                  {checkSvg}
                  <p className="text-sm text-gray-700">No credit card needed</p>
                </div>
                <div className="flex items-center gap-2">
                  {checkSvg}
                  <p className="text-sm text-gray-700">Free 14-day Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="relative sm:-mt-80 -mt-64">
          <div className="hidden sm:block">
            <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 after:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
            <div className="before:w-24 before:h-24 before:absolute before:-bottom-10 before:start-10 before:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
          </div>

          <div
            id="swiper_one"
            className="swiper border-[10px] border-white bg-white shadow-lg rounded-md w-5/6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
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
                  width={887}
                  height={621}
                  src={sass1.src}
                  alt="saas1"
                  className="rounded-md"
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
                  width={887}
                  height={621}
                  src={sass2.src}
                  alt="saas2"
                  className="rounded-md"
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
                  width={887}
                  height={621}
                  src={sass3.src}
                  alt="saas3"
                  className="rounded-md"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
