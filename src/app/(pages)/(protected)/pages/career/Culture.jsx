import Image from 'next/image'

//images
import Img1 from '@/assets/images/photos/4.jpg'
import Img2 from '@/assets/images/photos/5.jpg'
import Img3 from '@/assets/images/photos/8.jpg'
import Img4 from '@/assets/images/photos/3.jpg'
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const cultureImages = [Img1, Img2, Img3, Img4]

const Culture = () => {
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
      <div className="my-14">
        <div className="container relative">
          <div className="text-center">
            <span className="text-sm  bg-primary/10 text-primary/90 rounded-full px-3 py-1">
              Our Culture
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Our Culture
            </h1>
            <p className="text-gray-500">
              At Prompt, We believe in a fully balanced personal and
              professional life, importance of focus, fun, self-motivation and
              full transparency.
            </p>
          </div>
          <div className="mt-14" data-aos="fade-up">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center">
              {(cultureImages ?? []).map((image, idx) => {
                return (
                  <div key={idx}>
                    <Image
                      width={532}
                      height={305}
                      src={image}
                      alt="photo-3"
                      className="border-[6px] border-white bg-white shadow-md"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Culture
