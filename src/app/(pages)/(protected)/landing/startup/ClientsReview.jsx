import Image from 'next/image'

// images
import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'
import paypal from '@/assets/images/brands/paypal.svg'
import spotify from '@/assets/images/brands/spotify.svg'
import shopify from '@/assets/images/brands/shopify.svg'

const brands = [amazon, google, paypal, spotify, shopify]

const ClientsReview = () => {
  return (
    <section className="xl:py-24 py-16">
      <div className="container" data-aos="fade-up" data-aos-duration={1000}>
        <div className="text-center">
          <div>
            <p className="text-base font-semibold">
              Join 10,000+ companies who trust Prompt.
            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 mt-7">
              {(brands ?? []).map((image, idx) => {
                return (
                  <div key={idx}>
                    <Image
                      alt="com"
                      width={112}
                      height={37}
                      src={image}
                      className="w-28"
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

export default ClientsReview
