
const Benefits = ({ benefits }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Benefits
          </span>
          <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">
            All plans includes these benefits
          </h2>
          <p className="md:text-lg text-slate-500 leading-7">
            Some benefits of the monthly/yearly subscription
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 gap-y-10 mt-16">
          {(benefits ?? []).map((benefit, idx) => {
            return (
              <div key={idx}>
                <div className="flex items-center lg:justify-center gap-6">
                  <div>
                    <div className="w-16 h-16 bg-primary/20 rounded-md flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-base">{benefit.title}</h5>
                    <p className="text-slate-400 mt-2">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
