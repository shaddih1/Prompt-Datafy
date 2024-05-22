import Link from 'next/link'

const PricingCards2 = ({ plans }) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
      {(plans ?? []).map((plan, idx) => {
        return (
          <div key={idx}>
            <div className="border text-center rounded h-full hover:shadow-lg relative">
              <div className="p-6 flex flex-col justify-between h-full">
                {plan.isPopular && (
                  <div className="absolute w-full h-[188px] -z-10 top-0 left-0 overflow-hidden">
                    <span className="absolute transform rotate-45 bg-primary text-center text-white font-medium py-1 right-[-52px] top-[23px] w-[170px] h-5 z-[2] text-xs overflow-hidden border border-dashed leading-[8px] border-white shadow-[0_0_0_3px] shadow-primary/40">
                      Popular
                    </span>
                  </div>
                )}
                <h4 className="text-lg text-primary">{plan.name}</h4>
                <h1 className="mt-3 mb-8">
                  <sup className="align-super text-sm text-slate-500">$</sup>
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <sub className="text-sm text-slate-500">{plan.duration}</sub>
                </h1>
                <hr />
                <div className="flex flex-col justify-between h-full mt-8">
                  <div className="grid gap-y-4">
                    {plan.features.map((feature, idx) => {
                      return (
                        <div
                          className="flex items-center text-start gap-2"
                          key={idx}
                        >
                          {feature && (
                            <>
                              <svg
                                className="w-5 h-5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{feature}</span>
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-14">
                    <Link
                      href=""
                      className="py-3 px-6 flex items-center justify-center rounded hover:border hover:border-primary/50 text-primary bg-primary/10 transition-all duration-500"
                    >
                      Sign Up Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PricingCards2
