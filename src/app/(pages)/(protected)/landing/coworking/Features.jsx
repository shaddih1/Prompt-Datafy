
import Image from 'next/image'


//image
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Features = ({ features }) => {
  return (
    <section className="py-20 bg-primary/10 relative" data-aos="fade-up">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image src={whiteWave} alt="svg" className="w-full -scale-x-100" />
      </div>
      <div className="container relative">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Features
          </span>
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            Why Choose Us
          </h2>
          <p className="text-slate-500">
            The benefits that will make you comfort
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {(features ?? []).map((feature, idx) => {
            return (
              <div className="bg-white p-6 rounded" key={idx}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center gap-5">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mb-2">{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
