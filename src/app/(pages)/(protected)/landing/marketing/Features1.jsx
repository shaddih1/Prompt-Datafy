


const Features1 = ({ features }) => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Features
          </span>
          <h1 className="text-3xl font-medium mt-3 mb-4">
            Marketing Solutions that works for everyone
          </h1>
          <p className="text-gray-500">
            Start working with <span className="text-primary"> Prompt</span> to
            manage your marketing better.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-6 gap-10 mt-16">
          {(features ?? []).map((feature, idx) => {
            return (
              <div data-aos="fade-up" data-aos-duration={300} key={idx}>
                <div
                  className={`h-12 w-12 rounded-md ${feature.variant} flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
                <h1 className="mb-3 mt-4 text-lg">{feature.title}</h1>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features1
