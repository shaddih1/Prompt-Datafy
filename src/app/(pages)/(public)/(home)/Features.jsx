

const Features = ({ features }) => {
  return (
    <section className="py-20 bg-primary/10" data-aos="fade-up">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Features
          </span>
          <h1 className="text-4xl my-4">Why Choose Prompt</h1>
          <p className="text-slate-500 mb-14">
            A modern design, fresh look and feel
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {(features ?? []).map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center gap-5 bg-white p-2 rounded"
                data-aos="fade-up"
                data-duration={600}
              >
                {item.icon ? (
                  <span className="flex items-center justify-center rounded-md w-12 h-12 bg-blue-100">
                    {item.icon}
                  </span>
                ) : (
                  <span className="flex items-center justify-center rounded-md w-12 h-12 bg-blue-100">
                    <span className="text-xl font-semibold text-primary">
                      {item.name[0]}
                    </span>
                  </span>
                )}
                <h5>{item.name}</h5>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
