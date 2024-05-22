import Link from 'next/link'
import Image from 'next/image'

//images
import startup1 from '@/assets/images/hero/startup1.svg'
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-yellow-50/80 relative">
      <section className="relative pt-44 pb-40">
        <div className="container">
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
              <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                Smart Solution that convert Lead to&nbsp;
                <span className="relative z-0 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                  Customer
                </span>
              </h1>
              <p className="text-gray-500">
                An AI based solution which automatically follow ups with your
                leads and convert into customers
              </p>
              <div className="flex gap-4 mt-16">
                <button className="flex items-center">
                  <Link
                    href=""
                    className="bg-primary text-white rounded-md hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
                  >
                    Know more
                  </Link>
                </button>
                <button className="flex items-center">
                  <Link
                    href=""
                    className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
                  >
                    Know more
                  </Link>
                </button>
              </div>
            </div>
            <div
              className="lg:col-span-4 order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <div>
                <Image
                  width={594}
                  height={378}
                  src={startup1}
                  alt="startup1-img"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <Image
          width={1905}
          height={150}
          src={whiteWave}
          alt="svg"
          className="w-full -scale-x-100 -scale-y-100"
        />
      </div>
    </section>
  )
}

export default Hero
