import Link from 'next/link'




//images
import Image from 'next/image'

const SpaceOptions = ({ spaceOptions }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Flexible
          </span>
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            Coworking Space Options
          </h2>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {(spaceOptions ?? []).map((option, idx) => {
            return (
              <div
                key={idx}
                className="shadow-lg rounded"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <Image
                  width={347}
                  height={195}
                  alt="coworkingImg"
                  src={option.image}
                  className="rounded-t"
                />
                <div className="p-5">
                  <h4 className="text-lg font-medium text-primary mb-2">
                    {option.title}
                  </h4>
                  <p className="text-sm text-slate-500">{option.description}</p>
                </div>
                <div className="p-5 pt-0">
                  <p className="flex items-center gap-3">
                    {option.space.icon}
                    <Link
                      href=""
                      className="text-sm font-medium text-slate-500"
                    >
                      {option.space.value}
                    </Link>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SpaceOptions
