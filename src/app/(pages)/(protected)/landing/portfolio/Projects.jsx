
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

const Projects = ({ projects }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <h1 className="text-3xl font-medium my-3">Latest Projects</h1>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <p>
              <Link href="" className="font-medium text-blue-600">
                UI/UX Design
              </Link>
            </p>
            <p>
              <Link href="" className="font-medium hover:text-blue-600">
                Branding
              </Link>
            </p>
            <p>
              <Link href="" className="font-medium hover:text-blue-600">
                Marketing
              </Link>
            </p>
            <p>
              <Link href="" className="font-medium hover:text-blue-600">
                Web Development
              </Link>
            </p>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-6"
          data-aos="fade-up"
          data-aos-duration={600}
        >
          {(projects ?? []).map((project, idx) => {
            return (
              <div key={idx} className="group relative mt-12 hover:opacity-80">
                <div className="pt-12 ps-12 bg-slate-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <h3 className="text-xl">{project.title}</h3>
                      <p className="font-medium text-slate-500 pe-8">
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <Image
                        alt="portfolioImage"
                        width={532}
                        height={448}
                        src={project.image}
                        className="rounded-md"
                      />
                    </div>
                    <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
                      <Link href="" className="inline-block">
                        <div className="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                          <p className="text-sm font-semibold text-white">
                            View Project
                          </p>
                          <FaArrowRight color="#ffff" />
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
      </div>
    </section>
  )
}

export default Projects
