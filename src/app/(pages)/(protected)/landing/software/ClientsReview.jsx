import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

//images
import mrImg from '@/assets/images/brands/mr.svg'
import amazon from '@/assets/images/brands/amazon.svg'
import google from '@/assets/images/brands/google.svg'
import paypal from '@/assets/images/brands/paypal.svg'
import spotify from '@/assets/images/brands/spotify.svg'
import shopify from '@/assets/images/brands/shopify.svg'

const brands = [amazon, google, paypal, spotify, shopify]

const ClientsReview = () => {
  const review = Array.from(new Array(5))
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-center">
          <div>
            <p className="text-base font-medium">
              Join 10,000+ other companies who are using Prompt
            </p>
            <div className="flex flex-wrap md:flex-nowrap gap-10 mt-7">
              {(brands ?? []).map((image, idx) => {
                return (
                  <div key={idx}>
                    <Image
                      width={77}
                      alt="clients"
                      height={26}
                      src={image}
                      className="w-28"
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <div className="flex xl:justify-end items-center mt-7">
              <div className="flex items-center">
                <p className="text-base font-medium">Score 9.5 out of 10 on</p>
                <Image
                  alt="mr"
                  src={mrImg}
                  width={48}
                  height={32}
                  className="w-12 h-8"
                />
              </div>
            </div>
            <div className="flex xl:justify-end gap-3 mt-7">
              {review.map((icon, idx) => {
                return (
                  <div
                    className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center"
                    key={idx}
                  >
                    <FaStar size={18} />
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
