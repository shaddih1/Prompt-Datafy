'use client'
import Image from 'next/image'
import CountUp from 'react-countup'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Counter = () => {
  return (
    <section className="bg-gradient-to-r from-gray-200/50 to-gray-100/50 relative lg:py-24 py-16">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image
          width={1905}
          height={150}
          src={whiteWave}
          alt="white-wave-svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="py-10">
        <div className="container" data-aos="fade-up">
          <div className="text-center">
            <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">
              Stats
            </span>
            <h1 className="text-3xl/tight font-medium mt-3">
              Prompt In Numbers
            </h1>
          </div>
          <div className="mt-14">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 text-center gap-10 lg:gap-6">
              <div>
                <span className="text-3xl">
                  <CountUp duration={5} start={10} end={100} suffix="+" />
                </span>
                <h1 className="mt-3 mb-1">Products Built </h1>
                <p className="text-gray-500">helped clients across the globe</p>
              </div>
              <div>
                <span className="text-3xl">
                  <CountUp
                    duration={5}
                    start={5}
                    end={21}
                    suffix="M+"
                    prefix="$"
                  />
                </span>
                <h1 className="mt-3 mb-1">Revenue Generated</h1>
                <p className="text-gray-500">across 10+ countries</p>
              </div>
              <div>
                <span className="text-3xl">
                  <CountUp duration={5} start={10} end={100} suffix="+" />
                </span>
                <h1 className="mt-3 mb-1">Satisfied Clients</h1>
                <p className="text-gray-500">across 100+ locations</p>
              </div>
              <div>
                <span className="text-3xl">
                  <CountUp duration={5} start={1} end={10} suffix="+" />
                </span>
                <h1 className="mt-3 mb-1">Awards Won </h1>
                <p className="text-gray-500">on Awards, CSS Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
