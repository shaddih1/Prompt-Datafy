//images
import Image from 'next/image'

//data
import { features2 } from './data'

const Features2 = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            More Features
          </span>
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            Features that showcase your app
          </h2>
          <p className="text-slate-500">
            Start working with <span className="text-primary">Prompt</span> to
            showcase your app to thousands of people.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
          {(features2 ?? []).map((item, idx) => {
            return (
              <div
                key={idx}
                className="text-center relative"
                data-aos="fade-up"
                data-aos-duration={300}
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3">{item.description}</p>
                <div className="pt-5">
                  <Image
                    alt="mobile2"
                    width={346}
                    height={346}
                    src={item.image.src}
                  />
                </div>
                <div
                  className={`absolute h-3 w-3 rounded-full ${item.shapes[0]}`}
                />
                <div
                  className={`absolute h-3 w-3 rounded-full ${item.shapes[1]}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features2
