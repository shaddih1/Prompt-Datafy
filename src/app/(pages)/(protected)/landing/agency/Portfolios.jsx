import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

const Portfolios = ({ portfolios }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Latest
          </span>
          <h1 className="text-3xl font-medium my-3">Featured Work</h1>
          <p className="font-medium text-slate-400 mt-5 mb-4">
            Explore some of our latest website projects
          </p>
        </div>
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-6"
          data-aos="fade-up"
          data-aos-duration={600}
        >
          {(portfolios ?? []).map((portfolio, idx) => {
            return (
              <div key={idx} className="group relative mt-12 hover:opacity-80">
                <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <h3 className="text-xl">{portfolio.title}</h3>
                      <p className="font-medium text-slate-500 pe-8">
                        {portfolio.description}
                      </p>
                    </div>
                    <div>
                      <Image
                        alt=""
                        height={448}
                        width={532}
                        src={portfolio.image.src}
                        className="rounded-md"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                      <Link href="" className="inline-block">
                        <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                          <p className="text-sm font-semibold text-white">
                            View Project
                          </p>
                          <FaArrowRightLong color="white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 group-hover:bg-slate-300/20 transition-all duration-300" />
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href=""
            className="flex gap-2 items-center py-3 px-6 rounded border border-black hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500"
          >
            Explore All Work <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolios
