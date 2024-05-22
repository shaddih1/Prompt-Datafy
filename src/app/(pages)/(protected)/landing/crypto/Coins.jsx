import Link from 'next/link'

import { FaArrowRight } from 'react-icons/fa6'

const Coins = ({ coins }) => {
  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Supported coins</h1>
          <p className="font-medium text-slate-500 mt-5 mb-4">
            Fastest way to buy or sell&nbsp;
            <span className="text-slate-900">popular</span> crypto coins.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14 mt-16">
          {(coins ?? []).map((coin, idx) => {
            const Icon = coin.icon
            return (
              <div className="flex items-center gap-5" key={idx}>
                <div
                  className={`h-12 w-12 ${coin.variant} rounded-full flex items-center justify-center`}
                >
                  <Icon size={24} color="#ffff" />
                </div>
                <h4 className="text-base">{coin.name}</h4>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mt-16 w-full">
          <Link
            href=""
            className="flex gap-2 items-center w-fit py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
          >
            View complete list <FaArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Coins
