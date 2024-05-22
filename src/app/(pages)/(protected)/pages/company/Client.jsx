import Image from 'next/image'
//images
import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'
import paypal from '@/assets/images/brands/paypal.svg'
import shopify from '@/assets/images/brands/shopify.svg'

const brands = [amazon, google, paypal, shopify]

const Client = () => {
  return (
    <section className="lg:pb-20 py-16">
      <div className="container">
        <div className="text-center">
          <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">
            Investor
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            We are backed by
          </h1>
          <p className="text-gray-500">
            100+ clients trust<span className="text-primary"> Prompt </span>to
            drive performance &amp; engagement.
          </p>
        </div>
        <div className="mt-14">
          <div
            className="grid md:grid-cols-4 grid-cols-2 gap-5 items-center"
            data-aos="fade-up"
          >
            {(brands ?? []).map((brand, idx) => {
              return (
                <div key={idx}>
                  <Image
                    width={128}
                    height={42}
                    src={brand}
                    alt="brand-logo"
                    className="w-32 mx-auto"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
