import Link from 'next/link'
import Image from 'next/image'
import HeroSwiper from './HeroSwiper'
import { FaPlay } from 'react-icons/fa6'

//images
import app1 from '@/assets/images/hero/app1.png'

const Hero = () => {
  return (
    <section className="pt-36 pb-24 bg-primary/5">
      <div className="container">
        <div className="grid lg:grid-cols-6 grid-cols-1 justify-between items-center gap-6">
          <div className="lg:col-span-3">
            <h2 className="md:text-5xl/tight text-3xl font-semibold mb-7">
              The best way to&nbsp;
              <span className="relative after:bg-amber-400/60 after:h-6 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                Showcase
              </span>
              &nbsp;your Mobile App
            </h2>
            <p className="text-slate-400 leading-7">
              To increase sales by skyrocketing communication with All messages
              in one simple dashboard it now takes seconds.
            </p>

            <div className="flex flex-wrap items-center mt-16 gap-6">
              <Link
                href=""
                className="py-3 px-6 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50"
              >
                Download
              </Link>
              <Link href="" className="flex items-center gap-2">
                <span className="flex items-center justify-center rounded-full w-10 h-10 bg-primary/10 text-primary hover:border hover:border-primary/20 hover:bg-primary/20">
                  <FaPlay />
                </span>
                <p className="font-medium text-primary hover:text-primary/90">
                  Watch Video
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:col-start-5 lg:col-span-2">
            <div className="relative">
              <Image src={app1} width={346} alt="img" />

              <div className="hidden lg:block">
                <HeroSwiper />

                <div className="hidden sm:block">
                  <div className="before:w-24 before:h-24 before:absolute before:-top-3 before:end-2 before:-z-10 before:bg-[url('../assets/images/pattern/dot3.svg')]"></div>
                  <div className="after:w-24 after:h-24 after:absolute after:bottom-10 after:-z-10 after:bg-[url('../assets/images/pattern/dot3.svg')]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
