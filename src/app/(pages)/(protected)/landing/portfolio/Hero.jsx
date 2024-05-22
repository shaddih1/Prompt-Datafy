import Image from 'next/image'
import Link from 'next/link'

//image
import portfolio1 from '@/assets/images/hero/portfolio1.png'

const Hero = () => {
  return (
    <section className="pt-44 relative bg-gradient-to-b from-red-500/5 to-amber-500/5">
      <div>
        <div className="hero-with-shapes -z-10">
          <div className="shape1" />
          <div className="shape2" />
          <div className="shape3" />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div
              className="pb-3"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <h4 className="text-lg">Hola! I am Greeva N.</h4>
              <h1 className="md:text-5xl text-3xl font-medium my-3">
                I&apos;m a freelance UX/UI Designer.
              </h1>
              <p className="text-base mt-6 mb-20 text-slate-700">
                A top-notch web designer helping business to craft their
                meaningful and interactive product experiences
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href=""
                  className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
                >
                  Hire Me
                </Link>
                <Link
                  href=""
                  className="py-3 px-6 rounded border border-red-500 hover:border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
                >
                  Download CV
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={500}>
              <Image
                width={374}
                height={533}
                alt="portfolio1"
                src={portfolio1}
                className="lg:ms-auto lg:me-0 mx-auto z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
