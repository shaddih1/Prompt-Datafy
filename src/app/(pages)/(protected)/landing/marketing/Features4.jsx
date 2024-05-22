import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'
import marketing from '@/assets/images/features/marketing4.jpg'

const Features4 = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100/70 to-gray-100/50 relative py-16 lg:py-32">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image
          src={whiteWave}
          alt="white-wave-svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container">
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center"
          data-aos="fade-up"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl/tight font-medium mb-5">
              Monitor what is being performed anytime
            </h1>
            <p className="text-gray-500">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae itaque earum rerum hic tenetur a sapiente
              delectus ut aut reiciendis voluptatibus maiores alias...
            </p>
            <div>
              <button
                name="Email"
                className="bg-primary text-white rounded-lg text-sm font-semibold inline-flex gap-2 items-center shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40  px-8 py-3 mt-8"
              >
                Start Free Trial <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              width={515}
              height={326}
              src={marketing}
              alt="marketing4"
              className="shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features4
