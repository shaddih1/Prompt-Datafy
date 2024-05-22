
const Benefits = ({ benefits }) => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Benefits
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            We take care of our team
          </h1>
          <p className="text-gray-500">Few benefits from working together</p>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {(benefits ?? []).map((benefit, idx) => {
              return (
                <div key={idx}>
                  <div
                    className="flex gap-6 items-center"
                    data-aos="fade-up"
                    data-aos-duration={300}
                  >
                    <div>
                      <span className="h-16 w-16 bg-primary/10 rounded-md flex items-center justify-center">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-2 font-medium">{benefit.title}</h6>
                      <p className="text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
