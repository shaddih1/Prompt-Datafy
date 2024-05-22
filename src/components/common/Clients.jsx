import Image from 'next/image'

//images
import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'
import paypal from '@/assets/images/brands/paypal.svg'
import spotify from '@/assets/images/brands/spotify.svg'
import shopify from '@/assets/images/brands/shopify.svg'
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const brands = [amazon, google, paypal, spotify, shopify]
const Clients = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-100/70 to-gray-100 relative xl:py-24 py-16">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <Image
            width={1905}
            height={150}
            src={whiteWave}
            alt="svg"
            className="w-full -scale-x-100"
          />
        </div>

        <div className="py-5">
          <div className="container" data-aos="fade-up" data-aos-duration="300">
            <div className="text-center">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                Clients
              </span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                The smart people management you need
              </h1>
              <p className="text-gray-500">
                21,000+ organizations trust
                <span className="text-primary">Prompt</span> to drive perfomance
                & engagement
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:gap-24 gap-10 mt-14">
              {(brands ?? []).map((image, idx) => {
                return (
                  <div key={idx}>
                    <Image
                      width={96}
                      height={32}
                      alt="app"
                      src={image}
                      className="h-8"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients
