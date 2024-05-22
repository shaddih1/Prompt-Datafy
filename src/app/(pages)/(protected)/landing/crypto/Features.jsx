import Image from 'next/image'




//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Features = ({ features }) => {
  return (
    <section className="py-24 bg-slate-500/10 relative" data-aos="fade-up">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image src={whiteWave} alt="svg" className="w-full -scale-x-100" />
      </div>
      <div className="container relative">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Why Choose Us
          </span>
          <h1 className="text-3xl font-medium my-3">
            The most trusted way to buy or sell crypto currency
          </h1>
          <p className="text-slate-400 mt-5 mb-4">
            Here are the few reasons why you should choose us
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
          {(features ?? []).map((feature, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-semibold">{feature.title}</h5>
                  <p className="text-slate-600 mt-2">{feature.description}</p>
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
